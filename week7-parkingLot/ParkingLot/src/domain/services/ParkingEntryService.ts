import { Vehicle } from "../../domain/entities/Vehicle";
import { ParkingSession } from "../../domain/entities/ParkingSession";
import { DomainError } from "../../domain/errors/DomainError";

import { ParkingSpotRepository } from "../interfaces/ParkingSpotRepository";
import { ParkingSessionRepository } from "../interfaces/ParkingSessionRepository";
import { ParkingLotRepository } from "../interfaces/ParkingLotRepository";

import { SpotAllocationService } from "./SpotAllocationService";

export class ParkingEntryService {
  constructor(
    private readonly spotRepository: ParkingSpotRepository,
    private readonly sessionRepository: ParkingSessionRepository,
    private readonly lotRepository: ParkingLotRepository,
    private readonly allocationService: SpotAllocationService,
    private readonly generateSessionId: () => string
  ) {}

  async enterVehicle(vehicle: Vehicle): Promise<ParkingSession> {

    // 1. Check parking lot status
    const lotStatus = await this.lotRepository.getStatus();

    if (lotStatus !== "OPEN") {
      throw new DomainError(
        `Parking lot is not accepting entries: ${lotStatus}`
      );
    }

    // 2. Prevent duplicate active sessions
    const existingSession =
      await this.sessionRepository.findActiveByVehicleId(vehicle.id);

    if (existingSession) {
      throw new DomainError(
        "Vehicle already has an active parking session"
      );
    }

    // 3. Retrieve available spots
    const availableSpots =
      await this.spotRepository.findAvailableSpots();

    // 4. Find compatible spots in priority order
    const candidates =
      this.allocationService.findBestSpots(vehicle, availableSpots);

    if (candidates.length === 0) {
      throw new DomainError("No compatible parking spot available");
    }

    // 5. Try to atomically claim a candidate
    let claimedSpotId: string | null = null;

    for (const spot of candidates) {
      const claimed = await this.spotRepository.claimIfAvailable(spot.id);

      if (claimed) {
        claimedSpotId = spot.id;
        break;
      }
    }

    if (!claimedSpotId) {
      throw new DomainError(
        "No compatible parking spot could be claimed"
      );
    }

    // 6. Create and save the session
    const session = new ParkingSession(
      this.generateSessionId(),
      vehicle.id,
      claimedSpotId
    );

    try {
      await this.sessionRepository.save(session);
      return session;
    } catch (saveError) {

      // 7. Compensate if session persistence fails
      try {
        await this.spotRepository.release(claimedSpotId);
      } catch (releaseError) {

        // Preserve both failures
        throw new AggregateError(
          [saveError, releaseError],
          "Session creation failed and spot release also failed"
        );
      }

      throw saveError;
    }
  }
}
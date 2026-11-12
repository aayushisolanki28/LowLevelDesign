import { DomainError } from "../../domain/errors/DomainError";
import { ParkingSession } from "../../domain/entities/ParkingSession";

import { ParkingSessionRepository } from "../interfaces/ParkingSessionRepository";
import { ParkingSpotRepository } from "../interfaces/ParkingSpotRepository";
import { ParkingFeeCalculator } from "../interfaces/ParkingFeeCalculator";
import { ParkingReconciliationRepository } from "../interfaces/ParkingReconciliationRepository";

export class ParkingCheckoutService {
  constructor(
    private readonly sessionRepository: ParkingSessionRepository,
    private readonly spotRepository: ParkingSpotRepository,
    private readonly feeCalculator: ParkingFeeCalculator,
    private readonly reconciliationRepository: ParkingReconciliationRepository
  ) {}

  async checkout(sessionId: string): Promise<number> {
    // 1. Find session
    const session = await this.sessionRepository.findById(sessionId);

    if (!session) {
      throw new DomainError("Parking session not found");
    }

    // 2. Validate session state
    if (session.currentStatus !== "ACTIVE") {
      throw new DomainError("Parking session is already completed");
    }

    // 3. Capture checkout time
    const checkoutTime = new Date();

    // 4. Calculate fee before changing session state
    const fee = this.feeCalculator.calculate(session, checkoutTime);

    // 5. Atomically complete and persist the session
    const completedSession =
      await this.sessionRepository.completeIfActive(
        session.id,
        checkoutTime
      );

    if (!completedSession) {
      throw new DomainError(
        "Session was already completed by another checkout request"
      );
    }

    // 6. Release parking spot
    try {
      await this.spotRepository.release(completedSession.spotId);
    } catch (releaseError) {
      // 7. Record inconsistency for reconciliation
      try {
        await this.reconciliationRepository.record({
          sessionId: completedSession.id,
          vehicleId: completedSession.vehicleId,
          spotId: completedSession.spotId,
          operation: "RELEASE_SPOT",
          error: String(releaseError),
          createdAt: new Date(),
        });
      } catch (reconciliationError) {
        throw new AggregateError(
          [releaseError, reconciliationError],
          "Spot release and reconciliation recording both failed"
        );
      }

      throw new DomainError(
        "Session completed, but spot release failed. Reconciliation required."
      );
    }

    // 8. Return calculated fee
    return fee;
  }
}
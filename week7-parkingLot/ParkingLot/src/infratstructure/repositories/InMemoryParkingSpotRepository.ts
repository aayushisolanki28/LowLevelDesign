import { ParkingSpot } from "../../domain/entities/ParkingSpot";
import { ParkingSpotRepository } from "../../application/interfaces/ParkingSpotRepository";
import { DomainError } from "../../domain/errors/DomainError";

export class InMemoryParkingSpotRepository
  implements ParkingSpotRepository {

  private readonly spots = new Map<string, ParkingSpot>();

  constructor(initialSpots: ParkingSpot[] = []) {
    initialSpots.forEach(spot => {
      this.spots.set(spot.id, spot);
    });
  }

  async findAvailableSpots(): Promise<ParkingSpot[]> {
    return Array.from(this.spots.values()).filter(
      spot => !spot.isOccupied
    );
  }

  async claimIfAvailable(spotId: string): Promise<boolean> {
    const spot = this.spots.get(spotId);

    if (!spot || spot.isOccupied) {
      return false;
    }

    spot.occupy();

    return true;
  }

  async release(spotId: string): Promise<void> {
    const spot = this.spots.get(spotId);

    if (!spot) {
      throw new DomainError(`Parking spot ${spotId} not found`);
    }

    spot.release();
  }
}

Responsibilities:
- Store parking spots.
- Find available spots.
- Atomically claim an available spot.
- Release an occupied spot.
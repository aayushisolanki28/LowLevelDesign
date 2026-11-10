import { Vehicle } from "../../domain/entities/Vehicle";
import { ParkingSpot } from "../../domain/entities/ParkingSpot";
import { SpotCompatibilityPolicy } from "../../domain/services/SpotCompatibilityPolicy";

export class SpotAllocationService {
  constructor(
    private readonly compatibilityPolicy: SpotCompatibilityPolicy
  ) {}

  findBestSpots(
    vehicle: Vehicle,
    availableSpots: ParkingSpot[]
  ): ParkingSpot[] {
    const priority = {
      SMALL: 1,
      MEDIUM: 2,
      LARGE: 3,
    };

    return availableSpots
      .filter(
        spot =>
          !spot.isOccupied &&
          this.compatibilityPolicy.isCompatible(
            vehicle.type,
            spot.size
          )
      )
      .sort((a, b) => priority[a.size] - priority[b.size]);
  }
}
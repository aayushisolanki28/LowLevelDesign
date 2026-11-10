import { DomainError } from "../errors/DomainError";
import { SpotSize, SpotStatus } from "../types/ParkingTypes";

export class ParkingSpot {
  readonly id: string;
  readonly size: SpotSize;
  readonly hasCharging: boolean;

  private status: SpotStatus = "AVAILABLE";

  constructor(
    id: string,
    size: SpotSize,
    hasCharging: boolean = false
  ) {
    if (!id.trim()) {
      throw new DomainError("Parking spot ID is required");
    }

    this.id = id;
    this.size = size;
    this.hasCharging = hasCharging;
  }

  get currentStatus(): SpotStatus {
    return this.status;
  }

  get isOccupied(): boolean {
    return this.status === "OCCUPIED";
  }

  occupy(): void {
    if (this.isOccupied) {
      throw new DomainError(
        `Parking spot ${this.id} is already occupied`
      );
    }

    this.status = "OCCUPIED";
  }

  release(): void {
    if (!this.isOccupied) {
      throw new DomainError(
        `Parking spot ${this.id} is already available`
      );
    }

    this.status = "AVAILABLE";
  }
}
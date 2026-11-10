import { DomainError } from "../errors/DomainError";
import { SessionStatus } from "../types/ParkingTypes";

export class ParkingSession {
  readonly id: string;
  readonly vehicleId: string;
  readonly spotId: string;
  readonly entryTime: Date;

  private status: SessionStatus = "ACTIVE";
  private checkoutTime?: Date;

  constructor(
    id: string,
    vehicleId: string,
    spotId: string,
    entryTime: Date = new Date()
  ) {
    if (!id || !vehicleId || !spotId) {
      throw new DomainError("Session details are required");
    }

    if (Number.isNaN(entryTime.getTime())) {
      throw new DomainError("Invalid entry time");
    }

    this.id = id;
    this.vehicleId = vehicleId;
    this.spotId = spotId;
    this.entryTime = new Date(entryTime);
  }

  get currentStatus(): SessionStatus {
    return this.status;
  }

  get exitTime(): Date | undefined {
    return this.checkoutTime
      ? new Date(this.checkoutTime)
      : undefined;
  }

  complete(checkoutTime: Date): void {
    if (this.status === "COMPLETED") {
      throw new DomainError("Session is already completed");
    }

    if (
      Number.isNaN(checkoutTime.getTime()) ||
      checkoutTime < this.entryTime
    ) {
      throw new DomainError("Invalid checkout time");
    }

    this.checkoutTime = new Date(checkoutTime);
    this.status = "COMPLETED";
  }
}
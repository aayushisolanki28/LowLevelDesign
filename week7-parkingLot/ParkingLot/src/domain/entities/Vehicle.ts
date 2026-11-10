import { VehicleType } from "../types/ParkingTypes";
import { DomainError } from "../errors/DomainError";

export class Vehicle {
  readonly id: string;
  readonly registrationNumber: string;
  readonly type: VehicleType;

  constructor(
    id: string,
    registrationNumber: string,
    type: VehicleType
  ) {
    if (!id.trim()) {
      throw new DomainError("Vehicle ID is required");
    }

    if (!registrationNumber.trim()) {
      throw new DomainError("Registration number is required");
    }

    this.id = id;
    this.registrationNumber = registrationNumber.trim().toUpperCase();
    this.type = type;
  }
}
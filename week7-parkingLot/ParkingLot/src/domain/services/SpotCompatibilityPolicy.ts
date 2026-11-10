import { VehicleType, SpotSize } from "../types/ParkingTypes";

export class SpotCompatibilityPolicy {
  private readonly requiredSize: Record<VehicleType, number> = {
    BIKE: 1,
    CAR: 2,
    TRUCK: 3,
  };

  private readonly availableSizes: Record<SpotSize, number> = {
    SMALL: 1,
    MEDIUM: 2,
    LARGE: 3,
  };

  isCompatible(vehicleType: VehicleType, spotSize: SpotSize): boolean {
    return (
      this.availableSizes[spotSize] >=
      this.requiredSize[vehicleType]
    );
  }
}
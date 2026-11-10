import { ParkingSpot } from "../../domain/entities/ParkingSpot";

export interface ParkingSpotRepository {
  findAvailableSpots(): Promise<ParkingSpot[]>;

  claimIfAvailable(spotId: string): Promise<boolean>;

  release(spotId: string): Promise<void>;
}
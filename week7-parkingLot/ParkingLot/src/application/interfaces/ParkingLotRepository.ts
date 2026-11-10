import { ParkingLotStatus } from "../../domain/types/ParkingTypes";

export interface ParkingLotRepository {
  getStatus(): Promise<ParkingLotStatus>;
}
import { ParkingSession } from "../../domain/entities/ParkingSession";

export interface ParkingFeeCalculator {
  calculate(session: ParkingSession): number;
}
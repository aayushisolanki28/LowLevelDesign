import { ParkingSession } from "../../domain/entities/ParkingSession";

export interface ParkingSessionRepository {
  save(session: ParkingSession): Promise<void>;

  findActiveByVehicleId(
    vehicleId: string
  ): Promise<ParkingSession | null>;

  findById(id: string): Promise<ParkingSession | null>;
}

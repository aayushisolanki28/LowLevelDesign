export interface ParkingReconciliationRecord {
  sessionId: string;
  vehicleId: string;
  spotId: string;
  operation: "RELEASE_SPOT";
  error: string;
  createdAt: Date;
}

export interface ParkingReconciliationRepository {
  record(record: ParkingReconciliationRecord): Promise<void>;
}
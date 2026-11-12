import {
  ParkingReconciliationRecord,
  ParkingReconciliationRepository
} from "../../application/interfaces/ParkingReconciliationRepository";

export class InMemoryParkingReconciliationRepository
  implements ParkingReconciliationRepository {

  private readonly records: ParkingReconciliationRecord[] = [];

  async record(
    record: ParkingReconciliationRecord
  ): Promise<void> {
    this.records.push({
      ...record,
      createdAt: new Date(record.createdAt)
    });
  }

  async findAll(): Promise<ParkingReconciliationRecord[]> {
    return this.records.map(record => ({
      ...record,
      createdAt: new Date(record.createdAt)
    }));
  }
}
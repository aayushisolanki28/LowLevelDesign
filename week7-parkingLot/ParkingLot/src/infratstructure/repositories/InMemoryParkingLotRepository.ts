import { ParkingLotStatus } from "../../domain/types/ParkingTypes";
import { ParkingLotRepository } from "../../application/interfaces/ParkingLotRepository";

export class InMemoryParkingLotRepository
  implements ParkingLotRepository {

  constructor(
    private status: ParkingLotStatus = "OPEN"
  ) {}

  async getStatus(): Promise<ParkingLotStatus> {
    return this.status;
  }

  setStatus(status: ParkingLotStatus): void {
    this.status = status;
  }
}
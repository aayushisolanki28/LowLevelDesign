import { ParkingSession } from "../entities/ParkingSession";
import { DomainError } from "../errors/DomainError";
import { ParkingFeeCalculator } from "../../application/interfaces/ParkingFeeCalculator";

export class DefaultParkingFeeCalculator
  implements ParkingFeeCalculator {

  private readonly ratePerBlock = 20;

  calculate(
    session: ParkingSession,
    checkoutTime: Date
  ): number {
    const durationMs =
      checkoutTime.getTime() - session.entryTime.getTime();

    if (
      Number.isNaN(checkoutTime.getTime()) ||
      durationMs < 0
    ) {
      throw new DomainError("Invalid parking duration");
    }

    const durationMinutes = Math.ceil(durationMs / 60000);

    const billingBlocks = Math.max(
      1,
      Math.ceil(durationMinutes / 30)
    );

    return billingBlocks * this.ratePerBlock;
  }
}
import { ParkingSession } from "../../domain/entities/ParkingSession";
import { ParkingSessionRepository } from "../../application/interfaces/ParkingSessionRepository";
import { DomainError } from "../../domain/errors/DomainError";

export class InMemoryParkingSessionRepository
  implements ParkingSessionRepository {

  private readonly sessions = new Map<string, ParkingSession>();

  async save(session: ParkingSession): Promise<void> {
    if (this.sessions.has(session.id)) {
      throw new DomainError(
        `Session ${session.id} already exists`
      );
    }

    this.sessions.set(session.id, session);
  }

  async findById(
    id: string
  ): Promise<ParkingSession | null> {
    return this.sessions.get(id) ?? null;
  }

  async findActiveByVehicleId(
    vehicleId: string
  ): Promise<ParkingSession | null> {
    for (const session of this.sessions.values()) {
      if (
        session.vehicleId === vehicleId &&
        session.currentStatus === "ACTIVE"
      ) {
        return session;
      }
    }

    return null;
  }

  async completeIfActive(
    sessionId: string,
    checkoutTime: Date
  ): Promise<ParkingSession | null> {
    const session = this.sessions.get(sessionId);

    if (!session || session.currentStatus !== "ACTIVE") {
      return null;
    }

    session.complete(checkoutTime);

    return session;
  }
}
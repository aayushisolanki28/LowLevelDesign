import { Vehicle } from "./domain/entities/Vehicle";
import { ParkingSpot } from "./domain/entities/ParkingSpot";

import { SpotCompatibilityPolicy } from "./domain/services/SpotCompatibilityPolicy";
import { DefaultParkingFeeCalculator } from "./domain/services/DefaultParkingFeeCalculator";

import { SpotAllocationService } from "./application/services/SpotAllocationService";
import { ParkingEntryService } from "./application/services/ParkingEntryService";
import { ParkingCheckoutService } from "./application/services/ParkingCheckoutService";

import { InMemoryParkingSpotRepository } from "./infrastructure/repositories/InMemoryParkingSpotRepository";
import { InMemoryParkingSessionRepository } from "./infrastructure/repositories/InMemoryParkingSessionRepository";
import { InMemoryParkingLotRepository } from "./infrastructure/repositories/InMemoryParkingLotRepository";
import { InMemoryParkingReconciliationRepository } from "./infrastructure/repositories/InMemoryParkingReconciliationRepository";

// 1. Create initial parking spots
const spots = [
  new ParkingSpot("S1", "SMALL"),
  new ParkingSpot("M1", "MEDIUM"),
  new ParkingSpot("L1", "LARGE")
];

// 2. Create repositories
const spotRepository =
  new InMemoryParkingSpotRepository(spots);

const sessionRepository =
  new InMemoryParkingSessionRepository();

const lotRepository =
  new InMemoryParkingLotRepository("OPEN");

const reconciliationRepository =
  new InMemoryParkingReconciliationRepository();

// 3. Create domain services
const compatibilityPolicy =
  new SpotCompatibilityPolicy();

const allocationService =
  new SpotAllocationService(compatibilityPolicy);

const feeCalculator =
  new DefaultParkingFeeCalculator();

// 4. Create application services
const entryService = new ParkingEntryService(
  spotRepository,
  sessionRepository,
  lotRepository,
  allocationService,
  () => crypto.randomUUID()
);

const checkoutService = new ParkingCheckoutService(
  sessionRepository,
  spotRepository,
  feeCalculator,
  reconciliationRepository
);

// 5. Run the parking workflow
async function main() {
  const vehicle = new Vehicle(
    "V1",
    "MP09AB1234",
    "CAR"
  );

  const session = await entryService.enterVehicle(vehicle);

  console.log("Vehicle parked:", session.id);

  const fee = await checkoutService.checkout(session.id);

  console.log("Checkout successful. Fee:", fee);
}

main().catch(console.error);
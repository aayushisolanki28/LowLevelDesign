import { BMWFactory } from "./concrete-factories/BMWFactory";
import { HondaFactory } from "./concrete-factories/HondaFactory";
import { ToyotaFactory } from "./concrete-factories/ToyotaFactory";
import { VehicleFactory } from "./interfaces/VehicleFactory";

const hondaFactory : VehicleFactory = new HondaFactory()
const honda = hondaFactory.createVehicle()

honda.start()
honda.stop()

const toyotaFactory : VehicleFactory = new ToyotaFactory()
const toyota = toyotaFactory.createVehicle()

toyota.start()
toyota.stop()

const bmwFactory  : VehicleFactory = new BMWFactory()

const bmw = bmwFactory.createVehicle()

bmw.start()
bmw.stop()


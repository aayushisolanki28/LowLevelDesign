import { VehicleFactory } from "../interfaces/VehicleFactory";
import { Vehicle } from "../interfaces/Vehicle";
import { Toyota } from "../concrete-car-brands/Toyota";

export class ToyotaFactory implements VehicleFactory{
    createVehicle() : Vehicle {
    return new Toyota()
    }

    
}
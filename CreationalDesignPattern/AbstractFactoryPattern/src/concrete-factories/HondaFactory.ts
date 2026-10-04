import { VehicleFactory } from "../interfaces/VehicleFactory";
import { Vehicle } from "../interfaces/Vehicle";
import { Honda } from "../concrete-car-brands/Honda";

export class HondaFactory implements VehicleFactory{
    createVehicle() : Vehicle {
    return new Honda()
    }

    
}
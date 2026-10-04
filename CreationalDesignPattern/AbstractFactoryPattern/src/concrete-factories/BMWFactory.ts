import { VehicleFactory } from "../interfaces/VehicleFactory";
import { Vehicle } from "../interfaces/Vehicle";
import { BMW } from "../concrete-car-brands/BMW";

export class BMWFactory implements VehicleFactory{
    createVehicle() : Vehicle {
    return new BMW()
    }

    
}
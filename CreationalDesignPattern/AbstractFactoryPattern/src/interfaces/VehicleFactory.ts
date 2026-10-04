import { Vehicle } from "./Vehicle";

export interface VehicleFactory{
    createVehicle() : Vehicle;
}
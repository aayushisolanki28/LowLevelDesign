import { VehicleFactory } from "../factory/VehicleFactory";

export class TransportationService{

    startVehicle(type : string) : void{
        const vehicle = VehicleFactory.createVehicle(type)

        vehicle.start()

    }
}
import { vehicle } from "../products/vehicle";
import { Cars } from "../products/Cars";
import {Bike} from "../products/Bike"
import { Truck } from "../products/Truck";

export class VehicleFactory{

    static createVehicle(type: string) : vehicle {
        switch (type){
            case "car" :
                return new Cars();

            case "Bike" :
                return new Bike();
            
            case "Truck" :
                return new Truck();

            default:
            throw new Error(`Unsupported vehicle type: ${type}`);

        }
    }

}
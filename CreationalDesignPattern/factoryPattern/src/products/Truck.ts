import { vehicle } from "./vehicle";
export class Truck implements vehicle{

    start() : void {
        console.log("truck started")
    }
    stop() : void {
        console.log("truck stopped")
    }
}
import { vehicle } from "./vehicle";
export class Bike implements vehicle{

    start() : void {
        console.log("bike started")
    }
    stop() : void {
        console.log("bike stopped")
    }
}
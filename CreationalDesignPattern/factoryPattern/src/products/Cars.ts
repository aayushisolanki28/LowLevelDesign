import { vehicle } from "./vehicle";
export class Cars implements vehicle{

    start() : void {
        console.log("car started")
    }
    stop() : void {
        console.log("car stopped")
    }
}
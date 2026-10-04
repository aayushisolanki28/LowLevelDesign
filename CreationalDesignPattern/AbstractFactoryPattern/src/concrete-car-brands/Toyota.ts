import { Vehicle } from "../interfaces/Vehicle";

export class Toyota implements Vehicle{
    start(): void {
        console.log("started")
    }
    stop() : void{
        console.log("stopped")
    }
}
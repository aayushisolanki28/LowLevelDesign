import { Vehicle } from "../interfaces/Vehicle";

export class Honda implements Vehicle{
    start(): void {
        console.log("started")
    }
    stop() : void{
        console.log("stopped")
    }
}
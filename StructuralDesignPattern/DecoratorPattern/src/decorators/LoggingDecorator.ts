import { NotificationSender } from "../interface/NotificationSender";

export class LoggingDecorator implements NotificationSender{
    constructor (private readonly logging : NotificationSender){}

    send(message: string) : void
    {
        console.log("logging...");
        this.logging.send(message)
    }

}
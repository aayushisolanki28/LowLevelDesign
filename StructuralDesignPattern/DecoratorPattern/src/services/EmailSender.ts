import { NotificationSender } from "../interface/NotificationSender";

export class EmailSender implements NotificationSender{
    send(message: string) : void {
        console.log(`email send ${message}`)
    }

}
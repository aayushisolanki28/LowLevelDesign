import { NotificationSender } from "../interface/NotificationSender";
export class EncryptionDecorator implements NotificationSender{
    constructor(private readonly sender : NotificationSender){}

    send(message: string):void 
    {
        console.log(`sending notification`)
        this.sender.send(message)
    }
}
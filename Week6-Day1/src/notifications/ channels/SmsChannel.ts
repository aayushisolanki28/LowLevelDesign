import { NotificationChannel, NotificationMessage } from "../NotificationChannel";

export class SMSChannel implements NotificationChannel{
    async send(message: NotificationMessage): Promise<void> {
        console.log(`sending sms to : ${message.recipient}`)
    }
}
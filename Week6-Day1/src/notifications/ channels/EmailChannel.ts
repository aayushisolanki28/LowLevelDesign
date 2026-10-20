import { NotificationChannel, NotificationMessage } from "../NotificationChannel";

export class EmailChannel implements NotificationChannel{
    async send(message: NotificationMessage): Promise<void> {
        console.log(`sending mail to : ${message.recipient}`)
    }
}
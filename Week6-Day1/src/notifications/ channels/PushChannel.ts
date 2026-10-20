import { NotificationChannel, NotificationMessage } from "../NotificationChannel";

export class PushChannel implements NotificationChannel{
    async send(message: NotificationMessage): Promise<void> {
        console.log(`sending push to : ${message.recipient}`)
    }
}
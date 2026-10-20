import type { ChannelType, NotificationChannel } from "../notifications/NotificationChannel";
import { NotificationChannelFactory } from "../notifications/NotificationChannelFactory";
import { NotificationService } from "../notifications/NotificationService";
import { EmailChannel } from "../notifications/ channels/EmailChannel";
import { PushChannel } from "../notifications/ channels/PushChannel";
import { SMSChannel } from "../notifications/ channels/SmsChannel";

export function createNotficationService () : NotificationService{
    const channels = new Map<ChannelType, NotificationChannel>([
        ["email", new EmailChannel()],
        ["sms", new SMSChannel()],
        ["push", new PushChannel()],
    ])
const factory = new NotificationChannelFactory(channels)

return new NotificationService(factory)

}
import { ChannelType, NotificationMessage } from "./NotificationChannel";
import { NotificationChannelResolver } from "./NotificationChannelFactory";

export class NotificationService{
    constructor(
        private readonly channelResolver : NotificationChannelResolver
    ) {}

    async notify(
        type: ChannelType,
        message: NotificationMessage
    ) : Promise<void>{
        const channel = this.channelResolver.resolve(type);
        await channel.send(message)

    }
}
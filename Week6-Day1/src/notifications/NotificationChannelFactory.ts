import { NotificationChannel,ChannelType } from "./NotificationChannel";

export interface NotificationChannelResolver{
    resolve(type: ChannelType) : NotificationChannel
}
export class NotificationChannelFactory implements NotificationChannelResolver{
    constructor(
        private readonly channels : Map<ChannelType,NotificationChannel>
    ){}

resolve(type: ChannelType): NotificationChannel {
    const channel = this.channels.get(type);

    if(!channel){
        throw new Error(`unsupported notification channel ${type}`)
    
}
     return channel

}
}

export interface NotificationMessage {
    recipient : string;
    body: string;
    subject : string
}
export interface NotificationChannel{
    send(message : NotificationMessage) : Promise<void>
}

export type ChannelType = "email" | "sms" | "push" | "whatsapp"

export interface NotificationSender {
    send(message: string, recipient: string ) : Promise<void>;
}
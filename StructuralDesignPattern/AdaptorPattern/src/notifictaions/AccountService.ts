import { NotificationSender } from "./NotificationSender";

export class AccountService {
  constructor(private readonly notifier: NotificationSender) {}

  async notifyAccountCreated(email: string): Promise<void> {
    await this.notifier.send(
      "Your account has been created",
      email
    );
  }
}
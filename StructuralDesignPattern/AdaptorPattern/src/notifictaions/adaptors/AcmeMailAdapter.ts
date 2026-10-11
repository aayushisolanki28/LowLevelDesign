import { NotificationSender } from "../NotificationSender";
import { AcmeMailSDK } from "./AcmeMailSDK";

export class AcmeMailAdapter implements NotificationSender {
  constructor(private readonly sdk: AcmeMailSDK) {}

  async send(message: string, recipient: string): Promise<void> {
    await this.sdk.dispatchEmail({
      destination: recipient,
      content: { text: message },
    });
  }
}
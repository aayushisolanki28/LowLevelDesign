export class NotificationService {
  async notify(
    userId: string,
    reportUrl: string,
  ): Promise<void> {
    console.log(
      `Notifying ${userId}: ${reportUrl}`,
    );
  }
}
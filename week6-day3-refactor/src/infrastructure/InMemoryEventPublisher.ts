import {
  EventPublisher,
  EventSubscriber,
  FileProcessedEvent
} from "../application/FileProcessedEvent";

export class InMemoryEventPublisher implements EventPublisher {
  private readonly subscribers: EventSubscriber[] = [];

  subscribe(subscriber: EventSubscriber): void {
    this.subscribers.push(subscriber);
  }

  async publish(event: FileProcessedEvent): Promise<void> {
    await Promise.all(
      this.subscribers.map(async (subscriber) => {
        try {
          await subscriber.handle(event);
        } catch (error) {
          console.error(
            `Subscriber failed for event ${event.eventId}`,
            error
          );
        }
      })
    );
  }
}
export interface FileProcessedEvent {
  eventId: string;
  fileId: string;
  result: string;
}

export interface EventSubscriber {
  handle(event: FileProcessedEvent): Promise<void>;
}

export interface EventPublisher {
  publish(event: FileProcessedEvent): Promise<void>;
}
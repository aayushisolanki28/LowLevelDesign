import { ProcessFileCommand } from "../domain/FileProcessingCommand";
import { FileProcessor } from "./FileProcessor";
import { EventPublisher } from "./FileProcessedEvent";

interface RequestRecord {
  fingerprint: string;
  operation: Promise<string>;
}

export class ProcessFileHandler {
  private readonly requests = new Map<string, RequestRecord>();

  constructor(
    private readonly processor: FileProcessor,
    private readonly eventPublisher: EventPublisher
  ) {}

  async execute(command: ProcessFileCommand): Promise<string> {
    const fingerprint = JSON.stringify({
      fileId: command.fileId,
      content: command.content
    });

    const existing = this.requests.get(command.requestId);

    if (existing) {
      if (existing.fingerprint !== fingerprint) {
        throw new Error(
          "Request ID was reused with different input"
        );
      }

      console.log("Duplicate request: returning existing result");
      return existing.operation;
    }

    const operation = this.processAndPublish(command);

    this.requests.set(command.requestId, {
      fingerprint,
      operation
    });

    try {
      return await operation;
    } catch (error) {
      // Allow a later retry if this attempt failed.
      this.requests.delete(command.requestId);
      throw error;
    }
  }

  private async processAndPublish(
    command: ProcessFileCommand
  ): Promise<string> {
    const result = await this.processor.process(
      command.fileId,
      command.content
    );

    await this.eventPublisher.publish({
      eventId: command.requestId,
      fileId: command.fileId,
      result
    });

    return result;
  }
}
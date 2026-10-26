import { randomUUID } from "node:crypto";

import { ProcessFileCommand } from "./domain/FileProcessingCommand";
import { EventSubscriber } from "./application/FileProcessedEvent";
import { ProcessFileHandler } from "./application/ProcessFileHandler";

import { BasicFileProcessor } from "./infrastructure/BasicFileProcessor";
import { LoggingFileProcessor } from "./infrastructure/LoggingFileProcessor";
import { InMemoryEventPublisher } from "./infrastructure/InMemoryEventPublisher";

const analytics: EventSubscriber = {
  async handle(event) {
    console.log("Analytics updated:", event.fileId);

    // Uncomment to test subscriber failure:
    // throw new Error("Analytics service unavailable");
  }
};

const notifier: EventSubscriber = {
  async handle(event) {
    console.log("User notified:", event.fileId);
  }
};

const publisher = new InMemoryEventPublisher();
publisher.subscribe(analytics);
publisher.subscribe(notifier);

const basicProcessor = new BasicFileProcessor();
const loggingProcessor = new LoggingFileProcessor(basicProcessor);

const handler = new ProcessFileHandler(
  loggingProcessor,
  publisher
);

async function main() {
  const command: ProcessFileCommand = {
    requestId: randomUUID(),
    fileId: "file-101",
    content: "monthly report"
  };

  const first = await handler.execute(command);
  console.log("First result:", first);

  // Same request ID and same input: should not process again.
  const second = await handler.execute(command);
  console.log("Retry result:", second);
}

main().catch(console.error);
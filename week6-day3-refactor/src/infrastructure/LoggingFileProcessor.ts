import { FileProcessor } from "../application/FileProcessor";

export class LoggingFileProcessor implements FileProcessor {
  constructor(private readonly inner: FileProcessor) {}

  async process(fileId: string, content: string): Promise<string> {
    const start = Date.now();

    try {
      console.log(`Starting processing: ${fileId}`);

      const result = await this.inner.process(fileId, content);

      console.log(`Processing succeeded: ${fileId}`);
      return result;
    } catch (error) {
      console.error(`Processing failed: ${fileId}`, error);
      throw error;
    } finally {
      console.log(
        `Processing duration: ${Date.now() - start}ms`
      );
    }
  }
}
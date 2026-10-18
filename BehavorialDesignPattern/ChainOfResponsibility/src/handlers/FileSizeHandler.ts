import { RequestHandler } from "./RequestHandler.js";
import type { UploadRequest } from "../models/UploadRequest.js";

export class FileSizeHandler extends RequestHandler {
  constructor(private readonly maxSizeBytes: number) {
    super();
  }

  async handle(request: UploadRequest): Promise<void> {
    if (request.sizeBytes <= 0) {
      throw new Error("File must not be empty");
    }

    if (request.sizeBytes > this.maxSizeBytes) {
      throw new Error("File exceeds the maximum allowed size");
    }

    console.log("File size check passed");

    await this.passToNext(request);
  }
}
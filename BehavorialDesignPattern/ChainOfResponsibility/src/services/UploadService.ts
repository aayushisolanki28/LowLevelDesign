import { FileValidationHandler } from "../handlers/FileValidationHandler.js";
import { FileSizeHandler } from "../handlers/FileSizeHandler.js";
import { VirusScanHandler } from "../handlers/VirusScanHandler.js";
import { StorageHandler } from "../handlers/StorageHandler.js";
import type { UploadRequest } from "../models/UploadRequest.js";

export class UploadService {
  async upload(request: UploadRequest): Promise<void> {
    const validation = new FileValidationHandler();
    const sizeCheck = new FileSizeHandler(5 * 1024 * 1024);
    const virusScan = new VirusScanHandler();
    const storage = new StorageHandler();

    validation
      .setNext(sizeCheck)
      .setNext(virusScan)
      .setNext(storage);

    await validation.handle(request);
  }
}
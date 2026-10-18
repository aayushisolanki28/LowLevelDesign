import { RequestHandler } from "./RequestHandler.js";
import type { UploadRequest } from "../models/UploadRequest.js";

export class StorageHandler extends RequestHandler {
  async handle(request: UploadRequest): Promise<void> {

    console.log(`File "${request.fileName}" stored successfully`);
  }
}
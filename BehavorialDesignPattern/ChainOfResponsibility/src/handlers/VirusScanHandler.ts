import { RequestHandler } from "./RequestHandler.js";
import type { UploadRequest } from "../models/UploadRequest.js";

export class VirusScanHandler extends RequestHandler {
  async handle(request: UploadRequest): Promise<void> {
    
    if (request.virusDetected) {
      throw new Error("Upload rejected: suspicious file detected");
    }

    console.log("Virus scan passed");

    await this.passToNext(request);
  }
}
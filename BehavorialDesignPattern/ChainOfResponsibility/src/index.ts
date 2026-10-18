import { UploadService } from "./services/UploadService.js";
import type { UploadRequest } from "./models/UploadRequest.js";

const uploadService = new UploadService();

const request: UploadRequest = {
  fileName: "profile.png",
  mimeType: "image/png",
  sizeBytes: 1024 * 1024,
  virusDetected: false
};

async function main() {
  try {
    await uploadService.upload(request);
    console.log("Upload completed");
  } catch (error) {
    console.error(
      "Upload failed:",
      error instanceof Error ? error.message : error
    );
  }
}

main();
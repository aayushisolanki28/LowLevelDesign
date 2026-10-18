import { RequestHandler } from "./RequestHandler";
import type { UploadRequest } from "../models/UploadRequest";


export class FileValidationHandler extends RequestHandler{
    async handle(request: UploadRequest): Promise<void> {
        const allowedTypes =[
            "image/png",
            "image/jpg",
            "application/pdf"
        ]

        if(!request.fileName.trim()){
            throw new Error("file name is required")
        }
        if(!allowedTypes.includes(request.mimeType)){
            throw new Error("file type not suppported")
        }
        console.log("Validation passed")
    
        await this.passToNext(request)
    }
}
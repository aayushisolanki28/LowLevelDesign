import { FileProcessor } from "../application/FileProcessor";
export class BasicFileProcessor implements FileProcessor{
    async process(fileId: string, content: string): Promise<string> {
        console.log(`File processed: ${fileId}`)

        if(!content.trim()){
            throw new Error("file content cannot be empty")
        }
        return `Processed ${fileId} : ${content.toUpperCase()}`
    }
}
export interface FileProcessor{
process(fileId: string, content: string) :Promise<string>
}
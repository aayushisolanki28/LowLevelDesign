import { CompressionStrategy } from "../interfaces/CompressionStrategy";

export class GzipCompression implements CompressionStrategy {
  compress(file: string): void {
    console.log(`Compressing ${file} using GZIP`);
  }
}
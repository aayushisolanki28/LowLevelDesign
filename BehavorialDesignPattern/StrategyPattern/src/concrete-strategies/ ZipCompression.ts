import { CompressionStrategy } from "../interfaces/CompressionStrategy";

export class ZipCompression implements CompressionStrategy {
  compress(file: string): void {
    console.log(`Compressing ${file} using ZIP`);
  }
}
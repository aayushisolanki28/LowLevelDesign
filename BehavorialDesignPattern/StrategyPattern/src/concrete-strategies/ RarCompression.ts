import { CompressionStrategy } from "../interfaces/CompressionStrategy";

export class RarCompression implements CompressionStrategy {
  compress(file: string): void {
    console.log(`Compressing ${file} using RAR`);
  }
}
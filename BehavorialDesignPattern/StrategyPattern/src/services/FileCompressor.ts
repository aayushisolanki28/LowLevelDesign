import { CompressionStrategy } from "../interfaces/CompressionStrategy";

export class FileCompressor {
  constructor(private strategy: CompressionStrategy) {}

  setStrategy(strategy: CompressionStrategy): void {
    this.strategy = strategy;
  }

  compress(file: string): void {
    this.strategy.compress(file);
  }
}
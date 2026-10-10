export interface CompressionStrategy {
  compress(file: string): void;
}
import { FileCompressor } from "./services/FileCompressor";
import { ZipCompression } from "./concrete-strategies/ ZipCompression";
import { RarCompression } from "./concrete-strategies/ RarCompression";
import { GzipCompression } from "./concrete-strategies/ GzipCompression";

const compressor = new FileCompressor(new ZipCompression());
compressor.compress("report.pdf");

compressor.setStrategy(new RarCompression());
compressor.compress("backup");

compressor.setStrategy(new GzipCompression());
compressor.compress("server.log");
export class PdfGenerator {
  async generate(metrics: object): Promise<Buffer> {
    console.log("Generating PDF report");

    // Placeholder for a real PDF-generation library.
    return Buffer.from(JSON.stringify(metrics));
  }
}
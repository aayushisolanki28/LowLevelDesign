export class ReportStorage {
  async save(file: Buffer): Promise<string> {
    console.log("Storing report");

    // Placeholder for filesystem or cloud storage.
    return `reports/${Date.now()}.pdf`;
  }
}
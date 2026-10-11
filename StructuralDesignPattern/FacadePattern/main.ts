import { AnalyticsService } from "./src/services/AnalyticsService";
import { MetricsCalculator } from "./src/services/ MetricsCalculator";
import { PdfGenerator } from "./src/services/ PdfGenerator";
import { ReportStorage } from "./src/services/ ReportStorage";
import { NotificationService } from "./src/services/NotificationService";
import { ReportFacade } from "./src/facades/ReportFacade";
import { ReportController } from "./src/controllers/ReportController";

const facade = new ReportFacade(
  new AnalyticsService(),
  new MetricsCalculator(),
  new PdfGenerator(),
  new ReportStorage(),
  new NotificationService(),
);

const controller = new ReportController(facade);

async function main() {
  const result = await controller.generateReport(
    "2026-09",
    "user-123",
  );

  console.log(result);
}

main();
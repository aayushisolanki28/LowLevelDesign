import { ReportBuilder } from "./builders/ReportBuilder";

const report = new ReportBuilder()
  .setTitle("Quarterly Sales")
  .setFormat("PDF")
  .addSection("Revenue")
  .addSection("Expenses")
  .enableCharts()
  .build();

console.log(report);
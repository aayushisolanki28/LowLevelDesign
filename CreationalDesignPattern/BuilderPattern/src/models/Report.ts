export type ReportFormat = "PDF" | "CSV" | "HTML";

export interface Report {
  title: string;
  format: ReportFormat;
  sections: string[];
  includeCharts: boolean;
}
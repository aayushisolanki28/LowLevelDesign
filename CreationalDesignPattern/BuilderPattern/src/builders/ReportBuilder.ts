import { Report, ReportFormat } from "../models/Report";

export class ReportBuilder {
  private title = "Untitled Report";
  private format: ReportFormat = "PDF";
  private sections: string[] = [];
  private includeCharts = false;

  setTitle(title: string): this {
    this.title = title;
    return this;
  }

  setFormat(format: ReportFormat): this {
    this.format = format;
    return this;
  }

  addSection(section: string): this {
    this.sections.push(section);
    return this;
  }

  enableCharts(): this {
    this.includeCharts = true;
    return this;
  }

  build(): Report {
    return {
      title: this.title,
      format: this.format,
      sections: [...this.sections],
      includeCharts: this.includeCharts,
    };
  }
}
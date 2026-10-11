import { AnalyticsService } from "../services/AnalyticService";
import { MetricsCalculator } from "../services/ MetricsCalculator";
import { PdfGenerator } from "../services/ PdfGenerator";
import { ReportStorage } from "../services/ ReportStorage";
import { NotificationService } from "../services/NotificationService";

export class ReportFacade{
    constructor(

        private readonly analytics : AnalyticsService,
        private readonly calculator : MetricsCalculator,
        private readonly generator : PdfGenerator,
        private readonly storage : ReportStorage,
        private readonly notifications : NotificationService

    ){}

    async generateMonthlyReport(
        month : string,
        userId : string
    ) : Promise<string> {

        const data = await this.analytics.fetchMonthlyData(month);
        const metric = await this.calculator.calculate(data);
        const pdf = await this.generator.generate(metric);
        const reportUrl = await this.storage.save(pdf)

        await this.notifications.notify(userId, reportUrl)
        
        return reportUrl

    }
}

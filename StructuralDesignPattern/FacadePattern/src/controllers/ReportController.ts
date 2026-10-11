import { ReportFacade } from "../facades/ReportFacade";
export class ReportController{

    constructor( private readonly facade : ReportFacade){}

    async generateReport (
        month: string,
        userId : string
    ){
        const reportUrl = await this.facade.generateMonthlyReport(month, userId)
        return{
            success: true,
            reportUrl
        }
    }
}
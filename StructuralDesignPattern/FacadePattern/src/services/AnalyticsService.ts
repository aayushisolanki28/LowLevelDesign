export class AnalyticsService {
  async fetchMonthlyData(month: string) {
    console.log(`Fetching analytics for ${month}`);

    return {
      month,
      totalUsers: 1200,
      revenue: 50000,
    };
  }
}
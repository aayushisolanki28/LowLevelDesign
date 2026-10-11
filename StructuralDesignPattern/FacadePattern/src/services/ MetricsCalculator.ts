export class MetricsCalculator {
  calculate(data: {
    totalUsers: number;
    revenue: number;
  }) {
    return {
      ...data,
      revenuePerUser:
        data.totalUsers > 0
          ? data.revenue / data.totalUsers
          : 0,
    };
  }
}
export interface WeeklyData {
  name: string;
  orders: number;
  revenue: number;
}

export interface DashboardStats {
  totalOrders: number;
  activeDrivers: {
    active: number;
    total: number;
  };
  revenue: number;
  weeklyData: WeeklyData[];
}

export interface StatsTrend {
  value: string;
  isPositive: boolean;
}
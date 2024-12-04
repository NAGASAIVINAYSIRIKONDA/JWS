import React from 'react';
import { StatsCard } from '../../components/dashboard/StatsCard';
import { WeeklyChart } from '../../components/dashboard/WeeklyChart';
import { useDashboardData } from '../../hooks/useDashboardData';
import { formatCurrency } from '../../utils/formatters';

export const AdminDashboard: React.FC = () => {
  const { stats, loading, error } = useDashboardData();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-4 rounded-md">
        {error}
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Orders"
          value={stats.totalOrders}
          trend={{ value: '↑ 12% from last week', isPositive: true }}
        />

        <StatsCard
          title="Active Drivers"
          value={stats.activeDrivers.active}
          subtitle={`Out of ${stats.activeDrivers.total} total`}
        />

        <StatsCard
          title="Revenue"
          value={formatCurrency(stats.revenue)}
          trend={{ value: '↑ 8% from last month', isPositive: true }}
        />
      </div>

      <WeeklyChart data={stats.weeklyData} />
    </div>
  );
};
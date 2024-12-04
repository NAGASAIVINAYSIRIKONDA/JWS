import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  trend?: {
    value: string;
    isPositive?: boolean;
  };
  subtitle?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value, trend, subtitle }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
      {trend && (
        <p className={`mt-2 text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {trend.value}
        </p>
      )}
      {subtitle && <p className="mt-2 text-sm text-gray-600">{subtitle}</p>}
    </div>
  );
};
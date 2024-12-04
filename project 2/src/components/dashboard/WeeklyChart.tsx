import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import type { WeeklyData } from '../../types/dashboard';

interface WeeklyChartProps {
  data: WeeklyData[];
}

export const WeeklyChart: React.FC<WeeklyChartProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Weekly Overview</h2>
      <div className="w-full overflow-x-auto">
        <BarChart width={800} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="orders" fill="#3B82F6" name="Orders" />
          <Bar yAxisId="right" dataKey="revenue" fill="#10B981" name="Revenue" />
        </BarChart>
      </div>
    </div>
  );
};
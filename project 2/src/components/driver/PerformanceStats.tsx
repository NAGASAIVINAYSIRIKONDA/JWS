import React from 'react';
import { Truck, Star, DollarSign, Route } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

interface PerformanceStatsProps {
  deliveriesCompleted: number;
  totalDistance: number;
  averageRating: number;
  earnings: number;
}

export const PerformanceStats: React.FC<PerformanceStatsProps> = ({
  deliveriesCompleted,
  totalDistance,
  averageRating,
  earnings,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Truck className="h-6 w-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Deliveries</p>
            <p className="text-2xl font-semibold text-gray-900">{deliveriesCompleted}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center">
          <div className="p-2 bg-green-100 rounded-lg">
            <Route className="h-6 w-6 text-green-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Distance</p>
            <p className="text-2xl font-semibold text-gray-900">{totalDistance} km</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center">
          <div className="p-2 bg-yellow-100 rounded-lg">
            <Star className="h-6 w-6 text-yellow-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Rating</p>
            <p className="text-2xl font-semibold text-gray-900">{averageRating}</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center">
          <div className="p-2 bg-purple-100 rounded-lg">
            <DollarSign className="h-6 w-6 text-purple-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Earnings</p>
            <p className="text-2xl font-semibold text-gray-900">
              {formatCurrency(earnings)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
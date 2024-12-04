import React from 'react';
import { useDriverData } from '../../hooks/useDriverData';
import { updateDeliveryStatus } from '../../services/driver';
import { PerformanceStats } from '../../components/driver/PerformanceStats';
import { DeliveryList } from '../../components/driver/DeliveryList';
import type { DeliveryStatus } from '../../types/driver';

export const DriverDashboard: React.FC = () => {
  const { stats, loading, error } = useDriverData();

  const handleStatusUpdate = async (
    deliveryId: string,
    status: DeliveryStatus['status']
  ) => {
    try {
      // In a real app, we would get the current location here
      const coordinates = {
        latitude: 40.7128,
        longitude: -74.0060,
      };
      
      await updateDeliveryStatus(deliveryId, status, coordinates);
      // In a real app, we would refresh the data here
    } catch (err) {
      console.error('Failed to update delivery status:', err);
    }
  };

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
        <h1 className="text-2xl font-semibold text-gray-900">Driver Dashboard</h1>
      </div>

      <PerformanceStats
        deliveriesCompleted={stats.deliveriesCompleted}
        totalDistance={stats.totalDistance}
        averageRating={stats.averageRating}
        earnings={stats.earnings}
      />

      <DeliveryList
        deliveries={stats.deliveries}
        onStatusUpdate={handleStatusUpdate}
      />
    </div>
  );
};
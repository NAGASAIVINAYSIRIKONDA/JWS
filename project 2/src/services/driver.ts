import axios from 'axios';
import type { DriverStats, DeliveryStatus, LocationCoordinates } from '../types/driver';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const fetchDriverStats = async (): Promise<DriverStats> => {
  // TODO: Replace with actual API call
  return {
    deliveriesCompleted: 42,
    totalDistance: 158.5,
    averageRating: 4.8,
    earnings: 1250,
    deliveries: [
      {
        id: '1',
        status: 'pending',
        address: '123 Main St, City',
        customerName: 'John Doe',
        volume: 500,
        scheduledTime: '2024-02-28T10:00:00Z',
      },
      {
        id: '2',
        status: 'in_progress',
        address: '456 Oak Ave, Town',
        customerName: 'Jane Smith',
        volume: 750,
        scheduledTime: '2024-02-28T11:30:00Z',
      },
    ],
  };
};

export const updateDeliveryStatus = async (
  deliveryId: string,
  status: DeliveryStatus['status'],
  coordinates?: LocationCoordinates
): Promise<void> => {
  // TODO: Replace with actual API call
  console.log('Updating delivery status:', { deliveryId, status, coordinates });
};
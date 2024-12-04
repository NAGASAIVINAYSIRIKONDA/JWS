import axios from 'axios';
import type { DealerStats, Order } from '../types/dealer';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const fetchDealerStats = async (): Promise<DealerStats> => {
  // TODO: Replace with actual API call
  return {
    totalRevenue: 45800,
    revenueTrend: {
      value: '↑ 15% from last month',
      isPositive: true,
    },
    activeOrders: 5,
    inventory: {
      total: 12,
      lowStock: 3,
    },
    recentOrders: [
      {
        id: '1',
        status: 'pending',
        items: [
          {
            id: '1',
            name: 'Mineral Water',
            quantity: 100,
            unitPrice: 2.5,
          },
        ],
        total: 250,
        orderDate: '2024-02-28T08:00:00Z',
      },
      {
        id: '2',
        status: 'in_transit',
        items: [
          {
            id: '2',
            name: 'Spring Water',
            quantity: 150,
            unitPrice: 2.0,
          },
        ],
        total: 300,
        orderDate: '2024-02-28T09:30:00Z',
      },
    ],
    inventoryItems: [
      {
        id: '1',
        name: 'Mineral Water',
        currentStock: 250,
        minimumStock: 100,
        reorderPoint: 150,
        unitPrice: 2.5,
        lastRestocked: '2024-02-25T10:00:00Z',
      },
      {
        id: '2',
        name: 'Spring Water',
        currentStock: 120,
        minimumStock: 100,
        reorderPoint: 150,
        unitPrice: 2.0,
        lastRestocked: '2024-02-26T14:00:00Z',
      },
      {
        id: '3',
        name: 'Purified Water',
        currentStock: 80,
        minimumStock: 100,
        reorderPoint: 150,
        unitPrice: 1.8,
        lastRestocked: '2024-02-24T16:00:00Z',
      },
    ],
  };
};

export const placeOrder = async (order: Partial<Order>): Promise<void> => {
  // TODO: Replace with actual API call
  console.log('Placing order:', order);
};
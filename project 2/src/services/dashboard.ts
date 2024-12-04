import axios from 'axios';
import type { DashboardStats } from '../types/dashboard';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const fetchDashboardStats = async (): Promise<DashboardStats> => {
  // TODO: Replace with actual API call
  return {
    totalOrders: 128,
    activeDrivers: {
      active: 24,
      total: 30,
    },
    revenue: 25600,
    weeklyData: [
      { name: 'Mon', orders: 12, revenue: 2400 },
      { name: 'Tue', orders: 15, revenue: 3000 },
      { name: 'Wed', orders: 20, revenue: 4000 },
      { name: 'Thu', orders: 18, revenue: 3600 },
      { name: 'Fri', orders: 25, revenue: 5000 },
      { name: 'Sat', orders: 22, revenue: 4400 },
      { name: 'Sun', orders: 16, revenue: 3200 },
    ],
  };
};
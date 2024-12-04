import type { StatsTrend } from './dashboard';

export interface InventoryItem {
  id: string;
  name: string;
  currentStock: number;
  minimumStock: number;
  reorderPoint: number;
  unitPrice: number;
  lastRestocked: string;
}

export interface Order {
  id: string;
  status: 'pending' | 'confirmed' | 'in_transit' | 'delivered';
  items: {
    id: string;
    name: string;
    quantity: number;
    unitPrice: number;
  }[];
  total: number;
  orderDate: string;
  deliveryDate?: string;
}

export interface DealerStats {
  totalRevenue: number;
  revenueTrend: StatsTrend;
  activeOrders: number;
  inventory: {
    total: number;
    lowStock: number;
  };
  recentOrders: Order[];
  inventoryItems: InventoryItem[];
}
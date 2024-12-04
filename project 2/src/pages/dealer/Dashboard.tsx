import React from 'react';
import { useDealerData } from '../../hooks/useDealerData';
import { placeOrder } from '../../services/dealer';
import { StatsCard } from '../../components/dashboard/StatsCard';
import { InventoryTable } from '../../components/dealer/InventoryTable';
import { OrderList } from '../../components/dealer/OrderList';
import { formatCurrency } from '../../utils/formatters';

export const DealerDashboard: React.FC = () => {
  const { stats, loading, error } = useDealerData();

  const handleReorder = async (itemId: string) => {
    try {
      const item = stats?.inventoryItems.find((i) => i.id === itemId);
      if (!item) return;

      const order = {
        items: [{
          id: item.id,
          name: item.name,
          quantity: item.reorderPoint - item.currentStock,
          unitPrice: item.unitPrice,
        }],
        status: 'pending' as const,
        orderDate: new Date().toISOString(),
      };

      await placeOrder(order);
      // In a real app, we would refresh the data here
    } catch (err) {
      console.error('Failed to place order:', err);
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
        <h1 className="text-2xl font-semibold text-gray-900">Dealer Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Revenue"
          value={formatCurrency(stats.totalRevenue)}
          trend={stats.revenueTrend}
        />

        <StatsCard
          title="Active Orders"
          value={stats.activeOrders}
        />

        <StatsCard
          title="Inventory Status"
          value={stats.inventory.total}
          subtitle={`${stats.inventory.lowStock} items low on stock`}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <InventoryTable
            items={stats.inventoryItems}
            onReorder={handleReorder}
          />
        </div>
        <div>
          <OrderList orders={stats.recentOrders} />
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { format } from 'date-fns';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';
import type { Order } from '../../types/dealer';
import { formatCurrency } from '../../utils/formatters';

interface OrderListProps {
  orders: Order[];
}

export const OrderList: React.FC<OrderListProps> = ({ orders }) => {
  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'confirmed':
        return <Package className="h-5 w-5 text-blue-500" />;
      case 'in_transit':
        return <Truck className="h-5 w-5 text-purple-500" />;
      case 'delivered':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Recent Orders</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {orders.map((order) => (
          <div key={order.id} className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                {getStatusIcon(order.status)}
                <span className="text-sm font-medium text-gray-900 capitalize">
                  {order.status.replace('_', ' ')}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                {format(new Date(order.orderDate), 'MMM d, h:mm a')}
              </span>
            </div>
            
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.quantity} units × {formatCurrency(item.unitPrice)}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {formatCurrency(item.quantity * item.unitPrice)}
                  </p>
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-sm font-medium text-gray-900">
                    {formatCurrency(order.total)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
import React from 'react';
import { format } from 'date-fns';
import { Package, AlertTriangle } from 'lucide-react';
import type { InventoryItem } from '../../types/dealer';
import { formatCurrency } from '../../utils/formatters';

interface InventoryTableProps {
  items: InventoryItem[];
  onReorder: (itemId: string) => void;
}

export const InventoryTable: React.FC<InventoryTableProps> = ({ items, onReorder }) => {
  const getStockStatus = (item: InventoryItem) => {
    if (item.currentStock <= item.minimumStock) {
      return {
        label: 'Low Stock',
        className: 'bg-red-100 text-red-800',
        icon: <AlertTriangle className="h-4 w-4" />,
      };
    }
    if (item.currentStock <= item.reorderPoint) {
      return {
        label: 'Reorder Soon',
        className: 'bg-yellow-100 text-yellow-800',
        icon: <Package className="h-4 w-4" />,
      };
    }
    return {
      label: 'In Stock',
      className: 'bg-green-100 text-green-800',
      icon: <Package className="h-4 w-4" />,
    };
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Inventory Management</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Current Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Unit Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Restocked
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {items.map((item) => {
              const status = getStockStatus(item);
              return (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {item.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.currentStock}</div>
                    <div className="text-xs text-gray-500">
                      Min: {item.minimumStock}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex items-center gap-1 rounded-full text-xs font-medium ${status.className}`}>
                      {status.icon}
                      {status.label}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatCurrency(item.unitPrice)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {format(new Date(item.lastRestocked), 'MMM d, yyyy')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => onReorder(item.id)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Reorder
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
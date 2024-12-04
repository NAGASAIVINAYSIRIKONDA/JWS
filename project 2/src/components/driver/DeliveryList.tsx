import React from 'react';
import { format } from 'date-fns';
import { MapPin, Package, Clock, User } from 'lucide-react';
import type { DeliveryStatus } from '../../types/driver';

interface DeliveryListProps {
  deliveries: DeliveryStatus[];
  onStatusUpdate: (deliveryId: string, status: DeliveryStatus['status']) => void;
}

export const DeliveryList: React.FC<DeliveryListProps> = ({ deliveries, onStatusUpdate }) => {
  const getStatusColor = (status: DeliveryStatus['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Today's Deliveries</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {deliveries.map((delivery) => (
          <div key={delivery.id} className="p-4">
            <div className="flex items-center justify-between mb-4">
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  delivery.status
                )}`}
              >
                {delivery.status.replace('_', ' ').toUpperCase()}
              </span>
              <span className="text-sm text-gray-500">
                {format(new Date(delivery.scheduledTime), 'h:mm a')}
              </span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                <span>{delivery.address}</span>
              </div>
              
              <div className="flex items-center text-sm">
                <User className="h-4 w-4 text-gray-400 mr-2" />
                <span>{delivery.customerName}</span>
              </div>
              
              <div className="flex items-center text-sm">
                <Package className="h-4 w-4 text-gray-400 mr-2" />
                <span>{delivery.volume} L</span>
              </div>
              
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 text-gray-400 mr-2" />
                <span>
                  {format(new Date(delivery.scheduledTime), 'MMM d, h:mm a')}
                </span>
              </div>
            </div>

            <div className="mt-4 flex space-x-2">
              {delivery.status === 'pending' && (
                <button
                  onClick={() => onStatusUpdate(delivery.id, 'in_progress')}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
                >
                  Start Delivery
                </button>
              )}
              
              {delivery.status === 'in_progress' && (
                <button
                  onClick={() => onStatusUpdate(delivery.id, 'completed')}
                  className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700"
                >
                  Complete Delivery
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
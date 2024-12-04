export interface DeliveryStatus {
  id: string;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  address: string;
  customerName: string;
  volume: number;
  scheduledTime: string;
  completedTime?: string;
}

export interface DriverStats {
  deliveriesCompleted: number;
  totalDistance: number;
  averageRating: number;
  earnings: number;
  deliveries: DeliveryStatus[];
}

export interface LocationCoordinates {
  latitude: number;
  longitude: number;
}
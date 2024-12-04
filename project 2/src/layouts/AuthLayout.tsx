import React from 'react';
import { Outlet } from 'react-router-dom';
import { Droplets } from 'lucide-react';

export const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Droplets className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Water Services</h2>
          <p className="mt-2 text-gray-600">Management System</p>
        </div>
        <div className="bg-white shadow-xl rounded-lg p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
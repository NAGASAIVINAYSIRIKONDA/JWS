import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import { AuthLayout } from './layouts/AuthLayout';
import { DashboardLayout } from './layouts/DashboardLayout';
import { LoginPage } from './pages/auth/LoginPage';
import { AdminDashboard } from './pages/admin/Dashboard';
import { DriverDashboard } from './pages/driver/Dashboard';
import { DealerDashboard } from './pages/dealer/Dashboard';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);

  const getDashboardRoute = () => {
    if (!user) return '/login';
    switch (user.role) {
      case 'admin':
        return '/admin';
      case 'driver':        
        return '/driver';
      case 'dealer':
        return '/dealer';
      default:
        return '/login';
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route
            path="/login"
            element={
              !isAuthenticated ? <LoginPage /> : <Navigate to={getDashboardRoute()} />
            }
          />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            
            {/* Driver Routes */}
            <Route path="/driver" element={<DriverDashboard />} />
            
            {/* Dealer Routes */}
            <Route path="/dealer" element={<DealerDashboard />} />
          </Route>
        </Route>

        {/* Default Route */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to={getDashboardRoute()} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
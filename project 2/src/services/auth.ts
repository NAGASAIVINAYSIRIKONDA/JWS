import axios from 'axios';
import type { LoginCredentials } from '../types/auth';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const loginUser = async (credentials: LoginCredentials) => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  return response.data;
};

export const logoutUser = async () => {
  const response = await axios.post(`${API_URL}/auth/logout`);
  return response.data;
};

export const requestPasswordReset = async (email: string) => {
  const response = await axios.post(`${API_URL}/auth/reset-password`, { email });
  return response.data;
};

export const verifyTwoFactor = async (code: string, token: string) => {
  const response = await axios.post(`${API_URL}/auth/2fa/verify`, { code, token });
  return response.data;
};
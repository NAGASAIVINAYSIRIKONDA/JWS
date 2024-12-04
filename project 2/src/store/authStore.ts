import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AuthState, LoginCredentials, User } from '../types/auth';
import { loginUser, logoutUser } from '../services/auth';

interface AuthStore extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
  setUser: (user: User) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,

      setUser: (user) => set({ user }),

      login: async (credentials) => {
        try {
          const { user, token } = await loginUser(credentials);
          set({ user, token, isAuthenticated: true });
        } catch (error) {
          throw error;
        }
      },

      logout: async () => {
        try {
          await logoutUser();
          set({ user: null, token: null, isAuthenticated: false });
        } catch (error) {
          throw error;
        }
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);
import { useState, useEffect } from 'react';
import { fetchDriverStats } from '../services/driver';
import type { DriverStats } from '../types/driver';

export const useDriverData = () => {
  const [stats, setStats] = useState<DriverStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDriverData = async () => {
      try {
        setLoading(true);
        const data = await fetchDriverStats();
        setStats(data);
      } catch (err) {
        setError('Failed to load driver data');
      } finally {
        setLoading(false);
      }
    };

    loadDriverData();
  }, []);

  return { stats, loading, error };
};
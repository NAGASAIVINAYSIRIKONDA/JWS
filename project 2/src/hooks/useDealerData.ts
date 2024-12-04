import { useState, useEffect } from 'react';
import { fetchDealerStats } from '../services/dealer';
import type { DealerStats } from '../types/dealer';

export const useDealerData = () => {
  const [stats, setStats] = useState<DealerStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDealerData = async () => {
      try {
        setLoading(true);
        const data = await fetchDealerStats();
        setStats(data);
      } catch (err) {
        setError('Failed to load dealer data');
      } finally {
        setLoading(false);
      }
    };

    loadDealerData();
  }, []);

  return { stats, loading, error };
};
import { useState, useEffect } from 'react';
import { Point, generateLargePointsList } from '../utils/mockData';
import { usePointsStore } from '../store/usePointsStore';

/**
 * Hook para gerenciar pontos de rastreamento
 */
export const usePoints = (useLargeDataset: boolean = false) => {
  const { points: storePoints, loadPoints: loadFromStore } = usePointsStore();
  const [points, setPoints] = useState<Point[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadPointsData();
  }); // BUG: Missing dependency array causes infinite loop

  const loadPointsData = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));

      if (useLargeDataset) {
        const largeList = generateLargePointsList(5000);
        setPoints(largeList);
      } else {
        await loadFromStore();
        setPoints(storePoints);
      }

      setLoading(false);
    } catch (err) {
      setError('Erro ao carregar pontos');
      setLoading(false);
    }
  };

  const refreshPoints = async () => {
    // BUG: Doesn't reset loading before starting
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      await loadFromStore();
      setPoints(storePoints);
      setError(null);
      setLoading(false);
      // BUG: Loading only set to false in try block, not in catch or finally
    } catch (err) {
      setError('Erro ao atualizar pontos');
      // BUG: Loading remains true if error occurs
    }
  };

  return {
    points,
    loading,
    error,
    refreshPoints,
  };
};

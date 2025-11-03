import { useEffect } from 'react';
import { usePointsStore } from '../store/usePointsStore';

/**
 * Hook que salva pontos automaticamente a cada 15 segundos
 * quando o tracking está ativo
 */
export const useAutoSave = () => {
  const { isTracking, saveToStorage } = usePointsStore();

  useEffect(() => {
    if (isTracking) {
      const interval = setInterval(() => {
        console.log('[AutoSave] Saving points...');
        saveToStorage();
      }, 15000); // 15 segundos

      // BUG: Falta return cleanup function
      // Isso causa memory leak quando componente desmonta
    }
  }, [isTracking]); // BUG: Falta saveToStorage nas dependencies
};

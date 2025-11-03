import { useState, useEffect } from 'react';

interface Location {
  latitude: number;
  longitude: number;
  timestamp: number;
}

/**
 * Hook para simular rastreamento de localização
 */
export const useLocation = (trackingEnabled: boolean = false) => {
  const [location, setLocation] = useState<Location | null>(null);
  const [isTracking, setIsTracking] = useState(false);

  useEffect(() => {
    if (trackingEnabled) {
      setIsTracking(true);

      const interval = setInterval(() => {
        const newLocation: Location = {
          latitude: -23.5505 + (Math.random() - 0.5) * 0.01,
          longitude: -46.6333 + (Math.random() - 0.5) * 0.01,
          timestamp: Date.now(),
        };
        setLocation(newLocation);
      }, 3000);

      // BUG: Missing cleanup function
      // return () => clearInterval(interval);
    } else {
      setIsTracking(false);
    }
  }, [trackingEnabled]);

  // Second useEffect with multiple subscriptions that aren't cleaned up
  useEffect(() => {
    const listeners: number[] = [];

    if (isTracking) {
      const listener1 = setInterval(() => {
        console.log('Tracking active...');
      }, 1000);
      listeners.push(listener1);

      const listener2 = setInterval(() => {
        console.log('Sending telemetry...');
      }, 5000);
      listeners.push(listener2);

      const listener3 = setInterval(() => {
        console.log('Checking connection...');
      }, 10000);
      listeners.push(listener3);

      // BUG: No cleanup for any of these listeners
    }
  }, [isTracking]);

  return {
    location,
    isTracking,
  };
};

/**
 * Hook com closure stale para demonstrar problema com state em callbacks
 */
export const useLocationInterval = (intervalSeconds: number = 10) => {
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // BUG: Closure captures initial value of updateCount
      console.log(`Update count: ${updateCount}`);
      setUpdateCount(updateCount + 1); // Always adds 1 to the captured value

      setLastUpdate(new Date());
    }, intervalSeconds * 1000);

    return () => clearInterval(interval);
  }, [intervalSeconds]); // BUG: Missing updateCount in dependencies

  return { lastUpdate, updateCount };
};

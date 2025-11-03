import { NativeModulesProxy, EventEmitter } from 'expo-modules-core';

/**
 * Native Location Module Interface
 */

export interface LocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
}

export interface LocationPermissionResponse {
  granted: boolean;
  canAskAgain?: boolean;
}

const ExpoNativeLocationModule = {
  requestLocationPermission: async (): Promise<LocationPermissionResponse> => {
    console.log('[NativeModule] requestLocationPermission called');

    return {
      granted: true,
      canAskAgain: true,
    };
  },

  getCurrentLocation: async (): Promise<LocationData> => {
    console.log('[NativeModule] getCurrentLocation called');

    return {
      longitude: -23.5505,
      latitude: -46.6333,
      accuracy: 10.0,
      timestamp: Date.now(),
    };
  },

  startLocationTracking: async (intervalMs: number): Promise<void> => {
    console.log('[NativeModule] startLocationTracking called with interval:', intervalMs);
  },

  stopLocationTracking: async (): Promise<void> => {
    console.log('[NativeModule] stopLocationTracking called');
  },
};

export const requestLocationPermission = ExpoNativeLocationModule.requestLocationPermission;
export const getCurrentLocation = ExpoNativeLocationModule.getCurrentLocation;
export const startLocationTracking = ExpoNativeLocationModule.startLocationTracking;
export const stopLocationTracking = ExpoNativeLocationModule.stopLocationTracking;

const emitter = new EventEmitter({} as any);

export function addLocationListener(
  listener: (location: LocationData) => void
): { remove: () => void } {
  return emitter.addListener('onLocationUpdate', listener);
}

export default ExpoNativeLocationModule;

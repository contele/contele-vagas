import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Point, mockPoints } from '../utils/mockData';

interface PointsState {
  points: Point[];
  packages: string[];
  isTracking: boolean;
  lastSyncTime: Date | null;
  addPoint: (point: Point) => void;
  loadPoints: () => Promise<void>;
  saveToStorage: () => Promise<void>;
  startTracking: () => void;
  stopTracking: () => void;
  clearPoints: () => void;
}

export const usePointsStore = create<PointsState>((set, get) => ({
  points: [],
  packages: [],
  isTracking: false,
  lastSyncTime: null,

  addPoint: (point: Point) => {
    set((state) => ({
      points: [...state.points, point]
    }));
  },

  loadPoints: async () => {
    try {
      const stored = await AsyncStorage.getItem('@points');
      if (stored) {
        const parsedPoints = JSON.parse(stored);
        set({ points: parsedPoints });
      } else {
        set({ points: mockPoints });
      }
    } catch (error) {
      console.error('Error loading points:', error);
      set({ points: mockPoints });
    }
  },

  saveToStorage: async () => {
    try {
      const { points } = get();
      await AsyncStorage.setItem('@points', JSON.stringify(points));
      set({ lastSyncTime: new Date() });
    } catch (error) {
      console.error('Error saving points:', error);
    }
  },

  startTracking: () => {
    set({ isTracking: true });
  },

  stopTracking: () => {
    set({ isTracking: false });
  },

  clearPoints: () => {
    set({ points: [], lastSyncTime: null });
    AsyncStorage.removeItem('@points');
  },
}));

export interface Point {
  id: string;
  latitude: number;
  longitude: number;
  speed: number;
  time: string;
  address?: string;
  status: 'synced' | 'pending' | 'error';
}

export interface PointPackage {
  id: string;
  points: Point[];
  createdAt: string;
  syncedAt?: string;
  status: 'synced' | 'pending' | 'error';
}

// Mock data para simular pontos de rastreamento
export const mockPoints: Point[] = [
  {
    id: 'p1',
    latitude: -23.5505,
    longitude: -46.6333,
    speed: 45.5,
    time: '2025-11-03T10:15:30Z',
    address: 'Av. Paulista, 1000 - São Paulo, SP',
    status: 'synced'
  },
  {
    id: 'p2',
    latitude: -23.5489,
    longitude: -46.6388,
    speed: 52.0,
    time: '2025-11-03T10:20:45Z',
    address: 'Av. Brigadeiro Luís Antônio - São Paulo, SP',
    status: 'synced'
  },
  {
    id: 'p3',
    latitude: -23.5475,
    longitude: -46.6361,
    speed: 38.2,
    time: '2025-11-03T10:25:12Z',
    address: 'Rua Augusta - São Paulo, SP',
    status: 'pending'
  },
  {
    id: 'p4',
    latitude: -23.5614,
    longitude: -46.6556,
    speed: 60.8,
    time: '2025-11-03T10:30:00Z',
    address: 'Av. Faria Lima - São Paulo, SP',
    status: 'synced'
  },
  {
    id: 'p5',
    latitude: -23.5732,
    longitude: -46.6419,
    speed: 41.3,
    time: '2025-11-03T10:35:22Z',
    address: 'Av. Ibirapuera - São Paulo, SP',
    status: 'error'
  }
];

// Gera um grande array de pontos para testar performance (TICKET-008)
export const generateLargePointsList = (count: number = 5000): Point[] => {
  const points: Point[] = [];
  const baseTime = new Date('2025-11-03T08:00:00Z').getTime();

  for (let i = 0; i < count; i++) {
    points.push({
      id: `p${i}`,
      latitude: -23.5505 + (Math.random() - 0.5) * 0.1,
      longitude: -46.6333 + (Math.random() - 0.5) * 0.1,
      speed: Math.random() * 80,
      time: new Date(baseTime + i * 30000).toISOString(),
      address: `Endereço ${i} - São Paulo, SP`,
      status: i % 3 === 0 ? 'synced' : i % 3 === 1 ? 'pending' : 'error'
    });
  }

  return points;
};

export const mockPackages: PointPackage[] = [
  {
    id: 'pkg-001',
    points: mockPoints.slice(0, 3),
    createdAt: '2025-11-03T10:15:30Z',
    syncedAt: '2025-11-03T10:16:00Z',
    status: 'synced'
  },
  {
    id: 'pkg-002',
    points: mockPoints.slice(3, 5),
    createdAt: '2025-11-03T10:30:00Z',
    status: 'pending'
  }
];

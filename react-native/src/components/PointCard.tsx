import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Point } from '../utils/mockData';
import { formatDate, getRelativeTime } from '../utils/dateHelper';

interface PointCardProps {
  point: Point;
  onPress?: () => void;
}

/**
 * Card para exibir informações de um ponto de rastreamento
 */
const PointCard: React.FC<PointCardProps> = ({ point, onPress }) => {
  const getStatusColor = (status: string) => {
    const colors = {
      synced: '#28a745',
      pending: '#ffc107',
      error: '#dc3545',
    };
    return colors[status as keyof typeof colors] || '#6c757d';
  };

  const getStatusText = (status: string) => {
    const texts = {
      synced: 'Sincronizado',
      pending: 'Pendente',
      error: 'Erro',
    };
    return texts[status as keyof typeof texts] || 'Desconhecido';
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <Text style={styles.id}>#{point.id}</Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(point.status) }]}>
          <Text style={styles.statusText}>{getStatusText(point.status)}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.label}>Localização:</Text>
          <Text style={styles.value}>
            {point.latitude.toFixed(4)}, {point.longitude.toFixed(4)}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Velocidade:</Text>
          <Text style={styles.value}>{point.speed.toFixed(1)} km/h</Text>
        </View>

        {point.address && (
          <View style={styles.row}>
            <Text style={styles.label}>Endereço:</Text>
            <Text style={styles.value} numberOfLines={1}>
              {point.address}
            </Text>
          </View>
        )}

        <View style={styles.row}>
          <Text style={styles.label}>Data/Hora:</Text>
          <Text style={styles.value}>
            {formatDate(point.time)}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.labelSmall}>
            {getRelativeTime(point.time)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  id: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginRight: 8,
    minWidth: 90,
  },
  labelSmall: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
  value: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
});

export default PointCard;

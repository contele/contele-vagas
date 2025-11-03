import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { Point, mockPoints } from '../utils/mockData';
import { formatDate } from '../utils/dateHelper';

/**
 * Tela de detalhes de um ponto específico
 */
const PointDetailsScreen = ({ route, navigation }: any) => {
  const { pointId } = route.params;
  const [point, setPoint] = useState<Point | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPointDetails();
  }, [pointId]);

  const loadPointDetails = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));

      const data = mockPoints;

      setPoint(data[0]);

      setLoading(false);
    } catch (error) {
      console.error('Error loading point:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Detalhes do Ponto</Text>
        <Text style={styles.pointId}>#{point.id}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Localização</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Latitude:</Text>
          <Text style={styles.value}>{point.latitude.toFixed(6)}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Longitude:</Text>
          <Text style={styles.value}>{point.longitude.toFixed(6)}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Velocidade:</Text>
          <Text style={styles.value}>{point.speed.toFixed(2)} km/h</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Data/Hora:</Text>
          <Text style={styles.value}>{formatDate(point.time)}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Status:</Text>
          <Text style={[styles.value, styles.status]}>
            {point.status}
          </Text>
        </View>
        {point.address && (
          <View style={styles.infoRow}>
            <Text style={styles.label}>Endereço:</Text>
            <Text style={styles.value}>{point.address}</Text>
          </View>
        )}
      </View>

      <View style={styles.actions}>
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  pointId: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 12,
    padding: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    width: 120,
  },
  value: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  status: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  actions: {
    padding: 20,
  },
});

export default PointDetailsScreen;

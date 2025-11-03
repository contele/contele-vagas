import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, RefreshControl } from 'react-native';
import { usePoints } from '../hooks/usePoints';
import PointCard from '../components/PointCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorBoundary from '../components/ErrorBoundary';

/**
 * Tela principal que lista todos os pontos de rastreamento
 */
const PointsListScreen = ({ navigation }: any) => {
  const [useLargeDataset, setUseLargeDataset] = useState(false);

  const { points, loading, error, refreshPoints } = usePoints(useLargeDataset);

  const handlePointPress = (pointId: string) => {
    navigation.navigate('PointDetails', { pointId });
  };

  if (loading) {
    return <LoadingSpinner message="Carregando pontos" />;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ErrorBoundary>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Pontos de Rastreamento</Text>
          <Text style={styles.subtitle}>{points.length} pontos encontrados</Text>

          <View style={styles.toggleContainer}>
            <Text style={styles.toggleLabel}>
              Modo de teste (5000 pontos):
            </Text>
            <Switch
              value={useLargeDataset}
              onValueChange={setUseLargeDataset}
            />
          </View>
        </View>

        <ScrollView
          style={styles.listContainer}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={refreshPoints}
            />
          }
        >
          {points.map(point => (
            <PointCard
              point={point}
              onPress={() => handlePointPress(point.id)}
            />
          ))}

          {points.length === 0 && (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Nenhum ponto encontrado</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </ErrorBoundary>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  toggleLabel: {
    fontSize: 14,
    color: '#333',
  },
  listContainer: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#dc3545',
    textAlign: 'center',
  },
  emptyContainer: {
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
  },
});

export default PointsListScreen;

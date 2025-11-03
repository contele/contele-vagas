import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { useLocation, useLocationInterval } from '../hooks/useLocation';

/**
 * Tela de configurações com controles de rastreamento
 */
const SettingsScreen = () => {
  const [trackingEnabled, setTrackingEnabled] = useState(false);
  const [intervalSeconds, setIntervalSeconds] = useState(10);

  const { location, isTracking } = useLocation(trackingEnabled);
  const { lastUpdate, updateCount } = useLocationInterval(intervalSeconds);

  const intervals = [1, 3, 5, 10, 30, 60];

  const handleToggleTracking = () => {
    setTrackingEnabled(!trackingEnabled);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Configurações</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Rastreamento GPS</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Ativar rastreamento</Text>
          <Switch
            value={trackingEnabled}
            onValueChange={handleToggleTracking}
          />
        </View>

        {isTracking && (
          <View style={styles.statusContainer}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>Rastreamento ativo</Text>
          </View>
        )}

        {location && (
          <View style={styles.locationInfo}>
            <Text style={styles.locationLabel}>Última localização:</Text>
            <Text style={styles.locationValue}>
              Lat: {location.latitude.toFixed(6)}
            </Text>
            <Text style={styles.locationValue}>
              Lng: {location.longitude.toFixed(6)}
            </Text>
            <Text style={styles.locationValue}>
              Timestamp: {new Date(location.timestamp).toLocaleTimeString()}
            </Text>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Intervalo de Comunicação</Text>
        <Text style={styles.description}>
          Selecione o intervalo de envio de dados
        </Text>

        <View style={styles.intervalGrid}>
          {intervals.map(interval => (
            <TouchableOpacity
              key={interval}
              style={[
                styles.intervalButton,
                intervalSeconds === interval && styles.intervalButtonActive,
              ]}
              onPress={() => setIntervalSeconds(interval)}
            >
              <Text
                style={[
                  styles.intervalButtonText,
                  intervalSeconds === interval && styles.intervalButtonTextActive,
                ]}
              >
                {interval}s
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Debug Info</Text>

        <View style={styles.debugRow}>
          <Text style={styles.debugLabel}>Última atualização:</Text>
          <Text style={styles.debugValue}>
            {lastUpdate.toLocaleTimeString()}
          </Text>
        </View>

        <View style={styles.debugRow}>
          <Text style={styles.debugLabel}>Contador de updates:</Text>
          <Text style={styles.debugValue}>
            {updateCount}
          </Text>
        </View>
      </View>

      <View style={styles.warningBox}>
        <Text style={styles.warningText}>
          ⚠️ Dica: Ative o rastreamento e depois navegue para outra tela.
          Depois volte e observe o console para identificar possíveis problemas.
        </Text>
      </View>
    </View>
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
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    padding: 12,
    backgroundColor: '#d4edda',
    borderRadius: 8,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#28a745',
    marginRight: 8,
  },
  statusText: {
    fontSize: 14,
    color: '#155724',
    fontWeight: '600',
  },
  locationInfo: {
    marginTop: 12,
    padding: 12,
    backgroundColor: '#e7f3ff',
    borderRadius: 8,
  },
  locationLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#004085',
    marginBottom: 6,
  },
  locationValue: {
    fontSize: 13,
    color: '#004085',
    fontFamily: 'monospace',
  },
  intervalGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 12,
  },
  intervalButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#e9ecef',
    borderWidth: 2,
    borderColor: '#e9ecef',
    minWidth: 70,
    alignItems: 'center',
  },
  intervalButtonActive: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  intervalButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#495057',
  },
  intervalButtonTextActive: {
    color: '#fff',
  },
  debugRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  debugLabel: {
    fontSize: 14,
    color: '#666',
  },
  debugValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  warningBox: {
    margin: 16,
    padding: 16,
    backgroundColor: '#fff3cd',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ffc107',
  },
  warningText: {
    fontSize: 13,
    color: '#856404',
    lineHeight: 20,
  },
});

export default SettingsScreen;

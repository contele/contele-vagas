import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

interface LoadingSpinnerProps {
  message?: string;
}

/**
 * Componente de loading com animação
 */
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ message = 'Carregando...' }) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    // BUG: Heavy computation on main thread
    const heavyComputation = () => {
      const largeObject: any = {};
      for (let i = 0; i < 10000; i++) {
        largeObject[`key_${i}`] = {
          id: i,
          data: Array(100).fill(`value_${i}`),
          nested: {
            deep: {
              structure: Array(50).fill(i),
            },
          },
        };
      }

      const serialized = JSON.stringify(largeObject);
      const parsed = JSON.parse(serialized);

      Object.keys(parsed).forEach(key => {
        parsed[key].processed = true;
      });

      return parsed;
    };

    const result = heavyComputation();
    console.log('Heavy computation done:', Object.keys(result).length);

    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007bff" />
      <Text style={styles.message}>
        {message}
        {dots}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
});

export default LoadingSpinner;

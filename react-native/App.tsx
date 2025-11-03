import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import PointsListScreen from './src/screens/PointsListScreen';
import PointDetailsScreen from './src/screens/PointDetailsScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="PointsList"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#007bff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="PointsList"
            component={PointsListScreen}
            options={{ title: 'Pontos de Rastreamento' }}
          />
          <Stack.Screen
            name="PointDetails"
            component={PointDetailsScreen}
            options={{ title: 'Detalhes do Ponto' }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ title: 'Configurações' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

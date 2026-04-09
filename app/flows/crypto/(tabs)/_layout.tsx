import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/core/hooks/useColorScheme';

export default function TabLayoutDemo() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {
          height: 60, // Un poco más de altura para comodidad
          paddingBottom: 10,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 11, // Un poco más pequeño para que se vea elegante
          fontWeight: '600',
        },
      }}>

      {/* Pantalla 1: Dashboard Principal */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />
          ),
        }}
      />
      
      {/* Pantalla 2: Mercados y Precios */}
      <Tabs.Screen
        name="markets"
        options={{
          title: 'Mercado',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "stats-chart" : "stats-chart-outline"} size={24} color={color} />
          ),
        }}
      />
      
      {/* Pantalla 3: Trading / Intercambio */}
      <Tabs.Screen
        name="trade"
        options={{
          title: 'Trade',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "swap-horizontal" : "swap-horizontal-outline"} size={24} color={color} />
          ),
        }}
      />

      {/* Pantalla 4: Distribución de activos */}
      <Tabs.Screen
        name="portfolio"
        options={{
          title: 'Portafolio',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "pie-chart" : "pie-chart-outline"} size={24} color={color} />
          ),
        }}
      />

      {/* Pantalla 5: Configuración y Perfil */}
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Ajustes',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? "settings" : "settings-outline"} size={24} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}

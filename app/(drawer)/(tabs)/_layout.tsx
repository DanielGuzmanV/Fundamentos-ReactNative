import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/core/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>

      {/* Nivel basico */}
      <Tabs.Screen
        name="projectOne"
        options={{
          title: 'Demo 1',
          tabBarIcon: ({ color }) => <Ionicons name="egg-outline" size={24} color={color} />,
        }}
      />

      {/* Nivel intermedio */}
      <Tabs.Screen
        name="projectTwo"
        options={{
          title: 'Demo 2',
          tabBarIcon: ({ color }) => <Ionicons name="construct-outline" size={24} color={color} />,
        }}
      />

    </Tabs>
  );
}

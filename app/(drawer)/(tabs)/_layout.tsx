import { Ionicons } from '@expo/vector-icons';
import { Tabs, useNavigation } from 'expo-router';
import React from 'react';

import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/core/hooks/useColorScheme';
import { DrawerActions } from '@react-navigation/native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const navigation = useNavigation();

  const onOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer())
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: {
          height: 55,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}>

      {/* Pantalla Demo 1 */}
      <Tabs.Screen
        name="projectOne"
        options={{
          title: 'Demo 1',
          tabBarIcon: ({ color }) => <Ionicons name="egg-outline" size={24} color={color} />,
        }}
      />

      {/* Pantalla demo 2 */}
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

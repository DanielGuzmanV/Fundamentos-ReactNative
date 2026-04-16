import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/core/hooks/useColorScheme';
import React from 'react';
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native';
import { ActionButtons } from '../components/ActionButtons';
import { BalanceHeader } from '../components/BalanceHeader';
import { Watchlist } from '../components/Watchlist';
import { useRefresh } from '../hooks/useRefresh';

export const CryptoMainScreen = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  // Estado para el refresh
  const {onRefresh, refreshing} = useRefresh();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colorScheme === 'dark' ? '#FFFFFF' : '#0F172A'} 
            colors={[colorScheme === 'dark' ? '#FFFFFF' : '#007AFF']}
            progressBackgroundColor={colorScheme === 'dark' ? '#3e4d65' : '#FFFFFF'}
          />
        }
      >
        {/* 1. Sección de Balance Total */}
        <BalanceHeader
          balance="$45,231.80"
          percentageChange="2.45"
          isPositive={true}
        />

        {/* 2. Botones de Acción (Comprar, Enviar, etc.) */}
        <ActionButtons/>

        {/* 3. Lista de Seguimiento (Watchlist) */}
        <Watchlist/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { padding: 20 },
  listPlaceholder: { flex: 1, height: 400, backgroundColor: '#a9b4ce', },
});
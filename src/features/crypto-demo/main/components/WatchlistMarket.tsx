import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/core/hooks/useColorScheme';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { WATCHLIST_IDS } from '../constants/FavoritesCoins';
import { useWatchlistMarket } from '../hooks/useWatchlistMarket';
import { CryptoItemMarkets } from './CryptoItemMarkets';
import { EmptyWatchlist } from './EmptyWatchlist';
import { ErrorWatchlist } from './ErrorWatchlist';
import { WatchlistSkeleton } from './WatchlistSkeleton';

export const WatchlistMarket = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];
  const { data: cryptoData, isLoading, isError, error, isFetching, refetch } = useWatchlistMarket();

  // Lista de carga
  if (isLoading || isFetching) {
    return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.text }]}>Favoritos</Text>
      <WatchlistSkeleton quantity={WATCHLIST_IDS.length}/>
    </View>
  );
  }

  // Lista de error 
  if (isError) {
    // Mostrar mensaje de error
    return (
      <View>
        <Text style={[styles.title, { color: theme.text }]}>Favoritos</Text>
        <ErrorWatchlist errorMessage={error.message} onRetry={() => refetch()}/>
      </View>
    )
  }

  // Lista vacia
  if(!cryptoData || cryptoData.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={[styles.title, { color: theme.text }]}>Favoritos</Text>
        <EmptyWatchlist />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.text }]}>Favoritos</Text>
        <Pressable 
          hitSlop={12}
          style={({pressed}) => [
            styles.viewAllBtn,
            {
              backgroundColor: pressed ? theme.border : 'transparent',
              transform: [{scale: pressed? 0.95 : 1}]
            }
          ]}
        >
          <Text style={[styles.viewAllText, { color: Colors[colorScheme].tint }]}>
            Ver todos
          </Text>
        </Pressable>
      </View>

      <View style={styles.list}>
        {cryptoData?.map((coin) => (
          <CryptoItemMarkets key={coin.id} item={coin} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  list: {
    gap: 4,
  },
  
  viewAllBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: '700',
  },
});

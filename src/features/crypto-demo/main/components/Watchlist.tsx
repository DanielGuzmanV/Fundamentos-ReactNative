import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/core/hooks/useColorScheme';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useWatchlistData } from '../hooks/useWatchlistData';
import { CoinData } from '../types/coinCap';

// --- Sub-componente para cada fila ---
const CryptoItem = ({ item }: { item: CoinData }) => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  // Convertimos los strings de la api a numeros para la logica y formato
  const price = parseFloat(item.priceUsd);
  const change = parseFloat(item.changePercent24Hr);
  const isPositive = change >= 0;

  return (
    <Pressable 
      style={({ pressed }) => [
        styles.itemContainer,
        { backgroundColor: pressed ? theme.border : 'transparent' }
      ]}
    >
      <View style={styles.leftRow}>
        {/* Item rank */}
        <View style={[styles.rankCircle, { backgroundColor: theme.tint }]}>
          <Text style={styles.rankText}>{item.rank}</Text>
        </View>

        <View>
          <Text style={[styles.coinName, { color: theme.text }]}>{item.name}</Text>
          <Text style={styles.coinSymbol}>{item.symbol.toUpperCase()}</Text>
        </View>
      </View>

      <View style={styles.rightRow}>
        <Text style={[styles.priceText, { color: theme.text }]}>
          ${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </Text>
        <Text style={[
          styles.changeText, 
          { color: isPositive ? '#22C55E' : '#EF4444' }
        ]}>
          {isPositive ? '+' : ''}{change.toFixed(2)}%
        </Text>
      </View>
    </Pressable>
  );
};

// --- Componente Principal ---
export const Watchlist = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];
  const { data: cryptoData, isLoading, isError, error } = useWatchlistData();

  if (isLoading) {
    // Mostrar Skeleton Loader (o un simple "Cargando...")
    return <Text style={{ color: theme.text }}>Cargando favoritos...</Text>;
  }

  if (isError) {
    // Mostrar mensaje de error
    return <Text style={{ color: 'red' }}>Error: {error?.message}</Text>;
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
          <CryptoItem key={coin.id} item={coin} />
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
    gap: 4, // Espacio entre items
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 16,
    marginHorizontal: -10, // Para que el efecto de "press" llegue a los bordes
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  rankCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rankText: {
    color: '#393838',
    fontSize: 16,
    fontWeight: '700',
  },
  coinName: {
    fontSize: 16,
    fontWeight: '700',
  },
  coinSymbol: {
    fontSize: 13,
    color: '#94A3B8',
    fontWeight: '500',
  },
  rightRow: {
    alignItems: 'flex-end',
  },
  priceText: {
    fontSize: 16,
    fontWeight: '700',
  },
  changeText: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 2,
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
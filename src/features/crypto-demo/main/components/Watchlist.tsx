import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/core/hooks/useColorScheme';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { MOCK_WATCHLIST } from '../mocks/crypto-data';
import { CryptoCurrency } from '../types/crypto';

// --- Sub-componente para cada fila ---
const CryptoItem = ({ item }: { item: CryptoCurrency }) => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];
  
  const isPositive = item.price_change_percentage_24h >= 0;

  return (
    <Pressable 
      style={({ pressed }) => [
        styles.itemContainer,
        { backgroundColor: pressed ? theme.border : 'transparent' }
      ]}
    >
      <View style={styles.leftRow}>
        <Image source={{ uri: item.image }} style={styles.coinImage} />
        <View>
          <Text style={[styles.coinName, { color: theme.text }]}>{item.name}</Text>
          <Text style={styles.coinSymbol}>{item.symbol.toUpperCase()}</Text>
        </View>
      </View>

      <View style={styles.rightRow}>
        <Text style={[styles.priceText, { color: theme.text }]}>
          ${item.current_price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </Text>
        <Text style={[
          styles.changeText, 
          { color: isPositive ? '#22C55E' : '#EF4444' }
        ]}>
          {isPositive ? '+' : ''}{item.price_change_percentage_24h.toFixed(2)}%
        </Text>
      </View>
    </Pressable>
  );
};

// --- Componente Principal ---
export const Watchlist = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

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
        {MOCK_WATCHLIST.map((coin) => (
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
  coinImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
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
import Colors from "@/src/constants/Colors";
import { useColorScheme } from '@/src/core/hooks/useColorScheme';
import { Pressable, StyleSheet, Text, View } from "react-native";
import { CoinData } from "../types/coinCap";

interface Props {
  item: CoinData
}

export const CryptoItem = ({item}: Props) => {
  const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];
  
    // Convertimos los strings de la api a numeros para la logica y formato
    const price = parseFloat(item.priceUsd);
    const change = parseFloat(item.changePercent24Hr);
    const isPositive = change > 0;

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
          <Text style={[styles.rankText, {color: theme.background}]}>{item.rank}</Text>
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
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 16,
    marginHorizontal: -10,
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
    fontSize: 18,
    fontWeight: 'bold',
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
})
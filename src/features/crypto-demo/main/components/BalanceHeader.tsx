import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  balance: string;
  percentageChange: string;
  isPositive: boolean;
}

export const BalanceHeader = ({balance, percentageChange, isPositive}: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Balance Total</Text>
        <Pressable
          onPress={() => setIsVisible(!isVisible)}
          hitSlop={12}
          style={({pressed}) => ({
            opacity: pressed ? 0.5 : 1,
            transform: [{scale: pressed ? 0.9 : 1}]
          })}
        >
          <Ionicons 
            name={isVisible ? "eye-outline" : "eye-off-outline"} 
            size={20} 
            color="rgba(255,255,255,0.6)" 
          />
        </Pressable>
      </View>

      <View style={styles.balanceRow}>
        <Text style={styles.balanceText}>
          {isVisible ? balance : '••••••'}
        </Text>
        
        {/* Badge de variación porcentual */}
        <View style={[
          styles.badge, 
          { backgroundColor: isPositive ? '#22C55E' : '#EF4444' }
        ]}>
          <Ionicons 
            name={isPositive ? "caret-up" : "caret-down"} 
            size={12} 
            color="#fff" 
          />
          <Text style={styles.badgeText}>{percentageChange}%</Text>
        </View>
      </View>

      <Text style={styles.subtitle}>+$1,230.50 en las últimas 24h</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0F172A', // Color oscuro profundo (muy Pro)
    borderRadius: 28,
    padding: 24,
    width: '100%',
    // Sombras para dar profundidad
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },
  balanceText: {
    color: '#fff',
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: -0.5,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    gap: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 14,
    marginTop: 15,
    fontWeight: '500',
  }
})
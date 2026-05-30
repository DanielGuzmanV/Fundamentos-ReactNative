import Colors from "@/src/constants/Colors";
import { useColorScheme } from "@/src/core/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const EmptyWatchlist = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  return (
    <View style={styles.container}>
      <Ionicons 
        name="star-outline" 
        size={60} color={theme.tabIconDefault}
        style={styles.icon}
      />

      <Text style={[styles.title, {color: theme.text}]}>No hay favoritos aun</Text>
      <Text style={[styles.subtitle, {color: theme.tabIconDefault}]}>
        Agrega tus criptomonedas preferidas para verlas aqui.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: 'transparent'
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  }
})
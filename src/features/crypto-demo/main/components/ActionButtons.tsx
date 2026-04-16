import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface ActionItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress?: () => void;
  primary?: boolean;
}

const ActionItem = ({icon, label, onPress, primary }: ActionItemProps) => (
  <View style={styles.actionWrapper}>
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.iconCircle,
        primary && styles.primaryCircle,
        {transform: [{scale: pressed ? 0.92 : 1}]}
      ]}
    >
      <Ionicons
        name={icon}
        size={26}
        color={primary ? "#fff" : "#0f172a"}
      />
    </Pressable>
    <Text style={styles.actionLabel}>{label}</Text>
  </View>
);

export const ActionButtons = () => {
  return (
    <View style={styles.container}>
      <ActionItem icon="add" label="Comprar" primary />
      <ActionItem icon="send" label="Enviar" />
      <ActionItem icon="receipt" label="Recibir" />
      <ActionItem icon="swap-horizontal" label="Swap" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 25,
    width: '100%'
  },
  actionWrapper: {
    alignItems: 'center',
    gap: 8,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryCircle: {
    backgroundColor: '#007aff'
  },
  actionLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748b'
  }
})
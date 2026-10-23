import { TextCustom } from "@/src/shared/components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export const CompositionArrays = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={styles.block}>
      <TextCustom style={styles.description}>
        En React Native pasamos un arreglo <TextCustom style={styles.codeText}>(style=[a, b])</TextCustom>. El estilo a la derecha sobrescribe los valores del estilo a la izquierda.
      </TextCustom>

      <Pressable
        onPress={() => setIsActive(!isActive)}
        style={({ pressed }) => [
          styles.cardBase,
          isActive && styles.cardActive,
          pressed && styles.cardPressed,
        ]}
      >
        <Ionicons
          name={isActive ? 'checkmark-circle' : 'ellipse-outline'}
          size={22}
          color={isActive ? '#34C759' : '#8E8E93'}
        />
        <View style={styles.cardInfo}>
          <TextCustom style={[styles.cardTitle, isActive && styles.cardTitleActive]}>
            {isActive ? 'Estado Activo (Sobrescrito)' : 'Estado Base'}
          </TextCustom>
          <TextCustom style={styles.cardSub}>
            Toca para alternar la composición de estilos.
          </TextCustom>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    gap: 10,
  },
  description: {
    fontSize: 13,
    opacity: 0.75,
    lineHeight: 18,
  },
  codeText: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#34C759',
  },
  // 1. Composición de estilos
  cardBase: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(150, 150, 150, 0.2)',
    backgroundColor: 'rgba(150, 150, 150, 0.05)',
  },
  cardActive: {
    borderColor: '#34C759',
    backgroundColor: 'rgba(52, 199, 89, 0.1)',
  },
  cardPressed: {
    opacity: 0.7,
  },
  cardInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  cardTitleActive: {
    color: '#34C759',
    fontWeight: '700',
  },
  cardSub: {
    fontSize: 12,
    opacity: 0.6,
  },
})
import { TextCustom } from "@/src/shared/components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export const EventsCycle = () => {
  const [lastEvent, setLastEvent] = useState<string>('Ninguno');
  
  return (
    <View style={styles.block}>
      <TextCustom style={styles.description}>
        Interactúa con el área (clic normal o mantén presionado):
      </TextCustom>

      <Pressable
        style={({ pressed }) => [
          styles.eventBox,
          pressed && styles.eventBoxActive,
        ]}
        onPressIn={() => setLastEvent('onPressIn (Dedo tocó la pantalla)')}
        onPress={() => setLastEvent('onPress (Tap completado)')}
        onPressOut={() => setLastEvent('onPressOut (Dedo liberado)')}
        onLongPress={() => setLastEvent('onLongPress (Presión prolongada)')}
      >
        <Ionicons name="finger-print-outline" size={28} color="#5e9be6" />
        <TextCustom style={styles.eventBoxText}>Toca o mantén presionado aquí</TextCustom>
      </Pressable>

      <View style={styles.logBox}>
        <TextCustom style={styles.logLabel}>Último evento detectado:</TextCustom>
        <TextCustom style={styles.logValue}>{lastEvent}</TextCustom>
      </View>
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
   eventBox: {
    borderWidth: 1,
    borderColor: 'rgba(52, 103, 199, 0.4)',
    borderStyle: 'dashed',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: 'rgba(52, 74, 199, 0.05)',
  },
  eventBoxActive: {
    backgroundColor: 'rgba(52, 106, 199, 0.15)',
    borderColor: '#343bc7',
  },
  eventBoxText: {
    fontSize: 13,
    fontWeight: '600',
  },
  logBox: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'rgba(150, 150, 150, 0.1)',
    gap: 2,
  },
  logLabel: {
    fontSize: 11,
    opacity: 0.6,
  },
  logValue: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    color: '#34c2c7',
  },
})
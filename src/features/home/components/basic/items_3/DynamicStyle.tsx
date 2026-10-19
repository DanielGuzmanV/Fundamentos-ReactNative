import { TextCustom } from "@/src/shared/components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export const DynamicStyle = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <View style={styles.block}>
      <TextCustom style={styles.description}>
        <TextCustom style={styles.codeText}>Pressable</TextCustom> recibe una función en{' '}
        <TextCustom style={styles.codeText}>style</TextCustom> que provee el estado{' '}
        <TextCustom style={styles.codeText}>pressed</TextCustom>:
      </TextCustom>

      <Pressable
        style={({ pressed }) => [
          styles.buttonBase,
          pressed ? styles.buttonPressed : styles.buttonNormal,
        ]}
        onPress={() => setCounter((prev) => prev + 1)}
      >
        {({ pressed }) => (
          <View style={styles.buttonContent}>
            <Ionicons
              name={pressed ? 'heart' : 'heart-outline'}
              size={18}
              color="#FFF"
            />
            <TextCustom style={styles.buttonText}>
              {pressed ? '¡Presionado!' : `Clicks: ${counter}`}
            </TextCustom>
          </View>
        )}
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
  buttonBase: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonNormal: {
    backgroundColor: '#7d4fe8',
  },
  buttonPressed: {
    backgroundColor: '#542eac',
    transform: [{ scale: 0.97 }],
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 14,
  },
})
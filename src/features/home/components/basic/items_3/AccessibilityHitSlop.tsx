import { TextCustom } from "@/src/shared/components/Themed"
import { Ionicons } from "@expo/vector-icons"
import { Pressable, StyleSheet, View } from "react-native"

export const AccessibilityHitSlop = () => {
  return (
    <View style={styles.block}>
      <TextCustom style={styles.description}>
        El botón pequeño tiene un <TextCustom style={styles.codeText}>hitSlop</TextCustom> de 20px alrededor. ¡Puedes presionarlo incluso tocando fuera de su borde verde!
      </TextCustom>

      <View style={styles.hitSlopContainer}>
        <Pressable
          hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
          style={({ pressed }) => [
            styles.smallButton,
            pressed && styles.pressedOpacity,
          ]}
          onPress={() => alert('¡Botón activado mediante hitSlop!')}
        >
          <Ionicons name="add" size={16} color="#FFF" />
        </Pressable>
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
  codeText: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#34C759',
  },
  hitSlopContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  smallButton: {
    backgroundColor: '#348cc7',
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressedOpacity: {
    opacity: 0.6,
  },
})
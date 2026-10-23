import { TextCustom } from "@/src/shared/components/Themed"
import { StyleSheet, View } from "react-native"

export const BordersTransform = () => {
  return (
    <View style={styles.block}>
      <TextCustom style={styles.description}>
        A diferencia del CSS web, en RN declaramos <TextCustom style={styles.codeText}>borderBottomWidth</TextCustom> o <TextCustom style={styles.codeText}>transform</TextCustom> mediante un arreglo de objetos.
      </TextCustom>

      <View style={styles.customBorderCard}>
        <View style={styles.badgeContainer}>
          <TextCustom style={styles.badgeText}>ROTADO -3 deg</TextCustom>
        </View>
        <TextCustom style={styles.customBorderTitle}>Tarjeta con Borde Izquierdo</TextCustom>
        <TextCustom style={styles.customBorderSub}>
          Estilo personalizado con borderLeftWidth: 4 y backgroundColor semitransparente.
        </TextCustom>
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
  // 3. Bordes y Transform
  customBorderCard: {
    padding: 14,
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#34C759',
    backgroundColor: 'rgba(52, 199, 89, 0.06)',
    gap: 4,
  },
  badgeContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#34C759',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 4,
    transform: [{ rotate: '-3deg' }],
  },
  badgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  customBorderTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  customBorderSub: {
    fontSize: 12,
    opacity: 0.6,
    lineHeight: 16,
  },
})
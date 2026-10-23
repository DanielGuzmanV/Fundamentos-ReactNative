import { TextCustom } from "@/src/shared/components/Themed";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export const FlexboxMovil = () => {
  const [flexDirection, setFlexDirection] = useState<'column' | 'row'>('column');

  return (
    <View style={styles.block}>
      <TextCustom style={styles.description}>
        Por defecto <TextCustom style={styles.codeText}>flexDirection</TextCustom> es <TextCustom style={styles.codeText}>column</TextCustom>.
      </TextCustom>

      <Pressable
        style={styles.toggleDirBtn}
        onPress={() =>
          setFlexDirection((prev) => (prev === 'column' ? 'row' : 'column'))
        }
      >
        <Ionicons name="swap-horizontal" size={16} color="#FFF" />
        <TextCustom style={styles.toggleDirText}>
          Cambiar a: {flexDirection === 'column' ? 'ROW' : 'COLUMN'}
        </TextCustom>
      </Pressable>

      <View style={[styles.flexBoxContainer, { flexDirection }]}>
        <View style={[styles.box, styles.box1]}>
          <TextCustom style={styles.boxText}>1</TextCustom>
        </View>
        <View style={[styles.box, styles.box2]}>
          <TextCustom style={styles.boxText}>2</TextCustom>
        </View>
        <View style={[styles.box, styles.box3]}>
          <TextCustom style={styles.boxText}>3</TextCustom>
        </View>
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
  toggleDirBtn: {
    backgroundColor: '#34C759',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  toggleDirText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700',
  },
  flexBoxContainer: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: 'rgba(150, 150, 150, 0.08)',
    gap: 8,
    minHeight: 100,
  },
  box: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  box1: { backgroundColor: 'rgba(52, 199, 89, 0.3)' },
  box2: { backgroundColor: 'rgba(88, 86, 214, 0.3)' },
  box3: { backgroundColor: 'rgba(255, 149, 0, 0.3)' },
  boxText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
})
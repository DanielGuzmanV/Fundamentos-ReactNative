import { TextCustom, ViewCustom } from '@/src/shared/components/Themed';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonPressable } from '../../../components/basic/items_1/ButtonPressable';
import { LIST_LABEL } from '../../../constants/list_label';
import { useCounter } from '../../../hook/useCounter';

export default function JsxMobileScreen() {
  const {count, increment, decrement} = useCounter(0);

  return (
    <View style={styles.container}>
      {/* 1. Comparativa Web vs Mobile */}
      <TextCustom style={styles.sectionTitle}>1. Equivalencia de Etiquetas</TextCustom>
      <TextCustom style={styles.sectionSub}>
        En móvil no existe el DOM ni HTML. Mapeamos las etiquetas así:
      </TextCustom>

      <ViewCustom style={styles.comparisonCard}>
        <View style={styles.rowHeader}>
          <TextCustom style={styles.colHeader}>HTML (Web)</TextCustom>
          <Ionicons name="arrow-forward" size={16} color="#8E8E93" />
          <TextCustom style={styles.colHeader}>JSX (Mobile)</TextCustom>
        </View>

        <View style={styles.divider} />

        {LIST_LABEL.map((value, index) => (
          <View key={index} style={styles.row}>
            <TextCustom style={styles.codeText}>{value.labelWeb}</TextCustom>
            <Ionicons name="chevron-forward" size={14} color="#34C759" />
            <TextCustom style={[styles.codeText, styles.highlight]}>{value.labelMobile}</TextCustom>
          </View>
        ))}

      </ViewCustom>

      {/* 2. Demostración Interactiva */}
      <TextCustom style={styles.sectionTitle}>2. Seccion Interactiva</TextCustom>

      <ViewCustom style={styles.interactiveCard}>
        <TextCustom style={styles.cardTitle}>Renderizado Nativo</TextCustom>
        <TextCustom style={styles.cardText}>
          Este recuadro es un <TextCustom style={styles.inlineCode}>View</TextCustom> y este texto es un <TextCustom style={styles.inlineCode}>Text</TextCustom>.
        </TextCustom>

        <TextCustom style={styles.cardNumber}>Text - number {count}</TextCustom>

        <ButtonPressable
          onPress={increment}
          nameIcon='hand-left-outline'
          titleButton='Presionar aumentar'
        />
        <ButtonPressable
          onPress={decrement}
          nameIcon='hand-right-outline'
          titleButton='Presionar restar'
        />
      </ViewCustom>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 8,
  },
  sectionSub: {
    fontSize: 13,
    opacity: 0.7,
    marginBottom: 4,
  },
  comparisonCard: {
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(150, 150, 150, 0.15)',
    gap: 10,
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  colHeader: {
    fontSize: 12,
    fontWeight: '700',
    opacity: 0.6,
    textTransform: 'uppercase',
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(150, 150, 150, 0.15)',
    marginVertical: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 13,
  },
  highlight: {
    color: '#34C759',
    fontWeight: '700',
  },
  interactiveCard: {
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(150, 150, 150, 0.15)',
    gap: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
  cardText: {
    fontSize: 13,
    opacity: 0.8,
    lineHeight: 18,
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
  },
  inlineCode: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#34C759',
  },
  
});
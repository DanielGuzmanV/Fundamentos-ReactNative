import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeComponents } from '../../../components/basic/items_2/NativeComponents';
import { AccessibilityHitSlop } from '../../../components/basic/items_3/AccessibilityHitSlop';
import { DynamicStyle } from '../../../components/basic/items_3/DynamicStyle';
import { EventsCycle } from '../../../components/basic/items_3/EventsCycle';

export default function PressableScreen() {
  return (
    <View style={styles.container}>
      {/* 1. Botón básico con estilos condicionales usando pressed */}
      <NativeComponents titleTop="1. Estilo Dinámico" titleBody="Propiedad pressed">
        <DynamicStyle/>
      </NativeComponents>

      {/* 2. Ciclo de eventos táctiles */}
      <NativeComponents titleTop="2. Ciclo de Eventos" titleBody="Fases del Toque">
        <EventsCycle/>
      </NativeComponents>

      {/* 3. Accesibilidad y HitSlop */}
      <NativeComponents titleTop="3. Accesibilidad" titleBody="Propiedad hitSlop">
        <AccessibilityHitSlop/>
      </NativeComponents>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
});
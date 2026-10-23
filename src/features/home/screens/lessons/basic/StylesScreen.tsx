import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { NativeComponents } from '../../../components/basic/items_2/NativeComponents';
import { BordersTransform } from '../../../components/basic/items_4/BordersTransform';
import { CompositionArrays } from '../../../components/basic/items_4/CompositionArrays';
import { FlexboxMovil } from '../../../components/basic/items_4/FlexboxMovil';

export default function StylesScreen() {

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* 1. Composición de Estilos Arreglo */}
      <NativeComponents titleTop="1. Composición de Arreglos" titleBody="Mezcla de Estilos">
        <CompositionArrays/>
      </NativeComponents>

      {/* 2. Flexbox en Mobile */}
      <NativeComponents titleTop="2. Flexbox Móvil" titleBody="Eje Principal y Cruzado">
        <FlexboxMovil/>
      </NativeComponents>

      {/* 3. Transformaciones y Bordes Independientes */}
      <NativeComponents titleTop="3. Bordes y Transform" titleBody="Propiedades Específicas">
        <BordersTransform/>
      </NativeComponents>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingBottom: 24,
  },
});
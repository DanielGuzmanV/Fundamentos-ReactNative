import { TextCustom, ViewCustom } from '@/src/shared/components/Themed';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { CONCEPTS_DATA } from '../data/concepts.data';

interface Props {
  levelId: string;
  conceptId: string;
}

export const ConceptDetailScreen = ({ levelId, conceptId }: Props) => {
  // 1. Buscamos el nivel (basic, intermediate, advanced)
  const levelBlock = CONCEPTS_DATA.find((level) => level.id === levelId);

  // 2. Buscamos el tema específico dentro de sus items
  const concept = levelBlock?.items.find((item) => item.id === conceptId);

  return (
    <ViewCustom style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.infoCard}>
          <TextCustom style={styles.conceptTitle}>{concept?.title}</TextCustom>
          <TextCustom style={styles.conceptDescription}>
            {concept?.description}
          </TextCustom>
        </View>

        {/* Espacio preparado para renderizar el componente o código de la lección */}
        <ViewCustom style={styles.placeholderBox}>
          <TextCustom style={styles.placeholderText}>
            Nivel: "{levelId}" | Lección: "{conceptId}"
          </TextCustom>
        </ViewCustom>
      </ScrollView>
    </ViewCustom>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { padding: 20 },
  infoCard: { marginBottom: 20 },
  conceptTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  conceptDescription: { fontSize: 15, opacity: 0.7, lineHeight: 22 },
  placeholderBox: {
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(150,150,150,0.2)',
  },
  placeholderText: { fontSize: 14, fontWeight: '500' },
});
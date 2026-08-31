import { NotFoundComponent } from '@/src/shared/components/NotFoundComponent';
import { TextCustom, ViewCustom } from '@/src/shared/components/Themed';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { CONCEPTS_DATA } from '../data/concepts.data';
import { LESSON_COMPONENTS } from '../mappers/lessonMapper';

interface Props {
  levelId: string;
  conceptId: string;
}

export const ConceptDetailScreen = ({ levelId, conceptId }: Props) => {
  // 1. Buscamos el nivel (basic, intermediate, advanced)
  const levelBlock = CONCEPTS_DATA.find((level) => level.id === levelId);

  // 2. Buscamos el tema específico dentro de sus items
  const concept = levelBlock?.items.find((item) => item.id === conceptId);

  if(!concept){
    return (
      <ViewCustom style={styles.notFoundContainer}>
        <NotFoundComponent
          title="Lección no encontrada"
          description="No se pudo cargar la información de este tema."
        />
      </ViewCustom>
    );
  }

  const ComponentLesson = LESSON_COMPONENTS[conceptId];

  return (
    <ViewCustom style={styles.container}>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.infoCard}>
          <TextCustom style={styles.conceptTitle}>{concept?.title}</TextCustom>
          <TextCustom style={styles.conceptDescription}>
            {concept?.description}
          </TextCustom>

          {concept.codeExample && (
            <View style={styles.codeContainer}>
              <View style={styles.codeHeader}>
                <TextCustom style={styles.codeHeaderText}>Código de ejemplo</TextCustom>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TextCustom style={styles.codeText}>
                  {concept.codeExample}
                </TextCustom>
              </ScrollView>
            </View>
          )}
        </View>

        {/* Espacio preparado para renderizar el componente o código de la lección */}
        <ViewCustom style={styles.placeholderBox}>
          {ComponentLesson ? (
            <ComponentLesson/>
          ): (
            // Mejorar la seccion o realizar un componente independiente
            <NotFoundComponent/>
          )}
        </ViewCustom>
      </ScrollView>
    </ViewCustom>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  notFoundContainer: {flex: 1, padding: 20, justifyContent: 'center'},
  scrollContent: { padding: 20 },
  infoCard: { marginBottom: 20 },
  conceptTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  conceptDescription: { fontSize: 15, opacity: 0.7, lineHeight: 22 },
  codeContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
    marginTop: 4,
  },
  codeHeader: {
    backgroundColor: '#252526',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
  },
  codeHeaderText: {
    fontSize: 11,
    color: '#858585',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  codeText: {
    fontFamily: 'monospace',
    fontSize: 13,
    color: '#CE9178',
    padding: 14,
  },
  placeholderBox: {
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(150,150,150,0.2)',
  },
  placeholderText: { fontSize: 14, fontWeight: '500' },
});
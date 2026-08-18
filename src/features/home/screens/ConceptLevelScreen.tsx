import { TextCustom, ViewCustom } from '@/src/shared/components/Themed';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ConceptLevelCard } from '../components/ConceptLevelCard';
import { CONCEPTS_DATA } from '../data/concepts.data';
import { LEVEL_COLORS } from '../helper/colors';
import { ConceptDifficulty } from '../types/concept.types';

interface Props {
  levelId: string;
}

export default function ConceptLevelScreen({levelId}: Props) {
  const router = useRouter();

  // Obtenemos los datos correspondientes del nivel
  const levelData = CONCEPTS_DATA.find((level) => level.id === levelId);

  // Obtenemos el color correspondiente al nivel actual
  const levelColor = LEVEL_COLORS[levelId as ConceptDifficulty] ?? '#34C7';

  const handleSelectTopic = (topicId: string) => {
    // Navegamos pasando la leccion dinamica seleccionada
    router.push(`/flows/concepts/${levelId}/${topicId}` as any);
  }

  if(!levelData) {
    return (
      <ViewCustom style={styles.container}>
        <TextCustom>Nivel no encontrado</TextCustom>
      </ViewCustom>
    );
  }

  return (
    <ViewCustom style={styles.container}>
      <Stack.Screen options={{title: levelData.title}}/>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          {/* <TextCustom style={styles.title}>{levelData?.title}</TextCustom> */}
          <TextCustom style={styles.description}>{levelData?.description}</TextCustom>
        </View>

        {/* Aquí listaremos los temas individuales (Tema 1: FlatList, etc.) */}
        <View style={styles.list}>
          {levelData?.items.map((item, index) => (
            <ConceptLevelCard
              key={item.id}
              item={item}
              handleSelectTopic={handleSelectTopic}
              levelColor={levelColor}
              index={index}
            />
          ))}
        </View>
      </ScrollView>
    </ViewCustom>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { padding: 20 },
  header: { marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  description: { fontSize: 14, opacity: 0.7, marginBottom: 20 },
  list: { gap: 12 },
});
import { TextCustom, ViewCustom } from '@/src/shared/components/Themed';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
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
            <Pressable
              key={item.id}
              onPress={() => handleSelectTopic(item.id)}
              style={({ pressed }) => [styles.cardPressable, pressed && styles.pressed]}
            >
              <ViewCustom style={styles.card}>
                <View style={styles.cardHeader}>
                  <View style={[styles.badge, {backgroundColor: `${levelColor}1A`}]}>
                    <TextCustom style={[styles.badgeText, {color: levelColor}]}>
                      {index + 1}
                    </TextCustom>
                  </View>
                  <TextCustom style={styles.itemTitle}>{item.title}</TextCustom>
                </View>
                <TextCustom style={styles.itemDescription}>{item.description}</TextCustom>
                <View style={styles.cardFooter}>
                  <TextCustom style={[styles.actionText, {color: levelColor}]}>
                    Ver concepto
                  </TextCustom>
                  <Ionicons name="chevron-forward" size={14} color={levelColor} />
                </View>
              </ViewCustom>
            </Pressable>
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
  cardPressable: { borderRadius: 12 },
  pressed: { opacity: 0.8, transform: [{ scale: 0.99 }] },
  card: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgb(125, 124, 124)',
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8, gap: 10 },
  badge: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: { fontSize: 12, fontWeight: 'bold'},
  itemTitle: { fontSize: 16, fontWeight: '600', flex: 1 },
  itemDescription: { fontSize: 13, opacity: 0.7, lineHeight: 18, marginBottom: 12 },
  cardFooter: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-end', 
    gap: 4,
  },
  actionText: { fontSize: 12, fontWeight: '600'},
});
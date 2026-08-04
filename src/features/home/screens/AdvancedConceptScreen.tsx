import { TextCustom, ViewCustom } from '@/src/shared/components/Themed';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { advancedConcepts } from '../data/concepts/advanced_concepts';

export default function AdvancedConceptScreen() {
  // Obtenemos los datos correspondientes al nivel básico
  const advancedData = advancedConcepts;

  return (
    <ViewCustom style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TextCustom style={styles.title}>{advancedData?.title}</TextCustom>
        <TextCustom style={styles.description}>{advancedData?.description}</TextCustom>

        {/* Aquí listaremos los temas individuales (Tema 1: FlatList, etc.) */}
        <View style={styles.itemsContainer}>
          {advancedData?.items.map((item, index) => (
            <ViewCustom key={item.id} style={styles.itemCard}>
              <TextCustom style={styles.itemTitle}>
                {index + 1}. {item.title}
              </TextCustom>
              <TextCustom style={styles.itemDescription}>
                {item.description}
              </TextCustom>
            </ViewCustom>
          ))}
        </View>
      </ScrollView>
    </ViewCustom>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  description: { fontSize: 14, opacity: 0.7, marginBottom: 20 },
  itemsContainer: { gap: 12 },
  itemCard: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(150, 150, 150, 0.2)',
  },
  itemTitle: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  itemDescription: { fontSize: 13, opacity: 0.8 },
});
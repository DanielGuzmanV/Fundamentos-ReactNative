import { TextCustom, ViewCustom } from '@/src/shared/components/Themed';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { NativeComponents } from '../../../components/basic/items_2/NativeComponents';
import { ButtonProfileProps } from '../../../components/basic/items_3/ButtonProfileProps';

export default function NativeComponentsScreen() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      {/* 1. View & Text Primitivos */}
      <NativeComponents titleTop="1. View" titleBody="Ejemplo de un View">
        <TextCustom style={styles.sectionTitle}>Un simple View sin datos</TextCustom>
      </NativeComponents>

      <NativeComponents titleTop="2. View & Text" titleBody="Contenedor View">
        <ViewCustom style={styles.card}>
          <TextCustom style={styles.cardDescription}>
            Los componentes <TextCustom style={styles.codeText}>View</TextCustom> estructuran la UI. Todo el texto vive dentro de <TextCustom style={styles.codeText}>Text</TextCustom>.
          </TextCustom>
        </ViewCustom>
      </NativeComponents>

      {/* 2. Image (Remota y Local) */}
      <NativeComponents titleTop="3. Image Primitivos">
        <ViewCustom style={styles.card}>
          <View style={styles.imageRow}>
            <Image
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
              style={styles.remoteImage}
            />
            <View style={styles.imageInfo}>
              <TextCustom style={styles.imageLabel}>Imagen Remota (URI)</TextCustom>
              <TextCustom style={styles.imageSub}>Requiere width/height explícitos.</TextCustom>
            </View>
          </View>
        </ViewCustom>
      </NativeComponents>

      {/* 3. Pressable (Contenedor interactivo) */}
      <NativeComponents titleTop="4. Pressable">
        <ViewCustom style={styles.card}>
          <ButtonProfileProps
            title={isExpanded ? 'Ocultar Contenido Scroll' : 'Mostrar Contenido Scroll'}
            iconName={isExpanded ? 'eye-off-outline' : 'eye-outline'}
            onPress={() => setIsExpanded((prev) => !prev)}
          />

          {isExpanded && (
            <View style={styles.expandedBox}>
              <Ionicons name="layers-outline" size={20} color="#34C759" />
              <TextCustom style={styles.expandedText}>
                Este bloque fue revelado dentro de un contenedor en un <TextCustom style={styles.codeText}>ScrollView</TextCustom>.
              </TextCustom>
            </View>
          )}
        </ViewCustom>
      </NativeComponents>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    gap: 12,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 6,
  },
  card: {
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(150, 150, 150, 0.15)',
    gap: 10,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
  cardDescription: {
    fontSize: 13,
    opacity: 0.75,
    lineHeight: 18,
  },
  codeText: {
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#34C759',
  },
  imageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  remoteImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: 'rgba(150, 150, 150, 0.2)',
  },
  imageInfo: {
    flex: 1,
    gap: 2,
  },
  imageLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  imageSub: {
    fontSize: 12,
    opacity: 0.6,
  },
  expandedBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 12,
    borderRadius: 10,
    backgroundColor: 'rgba(52, 199, 89, 0.1)',
  },
  expandedText: {
    fontSize: 12,
    flex: 1,
    lineHeight: 18,
  },
});
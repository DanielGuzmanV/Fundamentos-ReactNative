import { TextCustom, ViewCustom } from '@/src/shared/components/Themed';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

interface Props {
  titleTop: string;
  titleBody?: string;
  children: React.ReactNode;
}

export const NativeComponents = ({titleTop, titleBody, children}: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <View style={styles.folderContainer}>
      {/* Pestaña superior de la carpeta */}
      <View style={styles.folderTab}>
        <Ionicons name="folder-open-outline" size={14} color="#FFF" />
        <TextCustom style={styles.folderTabText}>{titleTop}</TextCustom>
      </View>

      {/* Cuerpo principal de la carpeta */}
      <ViewCustom style={styles.folderBody}>
        <View style={styles.folderHeader}>
          <TextCustom style={styles.folderTitle}>{titleBody}</TextCustom>
          <Pressable
            onPress={() => setIsOpen(!isOpen)}
            style={({ pressed }) => [styles.toggleBtn, pressed && styles.pressed]}
          >
            <TextCustom style={styles.toggleBtnText}>
              {isOpen ? 'Cerrar' : 'Abrir'}
            </TextCustom>
          </Pressable>
        </View>

        {/* Archivos/Contenidos anidados dentro del View */}
        {isOpen && (
          <View style={styles.filesContainer}>
            {children}
          </View>
        )}
      </ViewCustom>
    </View>
  );
}

const styles = StyleSheet.create({
  folderContainer: {
    marginTop: 8,
  },
  folderTab: {
    backgroundColor: '#34C759',
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  folderTabText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'monospace',
  },
  folderBody: {
    padding: 16,
    borderTopRightRadius: 14,
    borderBottomLeftRadius: 14,
    borderBottomRightRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(52, 199, 89, 0.4)',
    gap: 12,
  },
  folderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  folderTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  toggleBtn: {
    backgroundColor: 'rgba(150, 150, 150, 0.15)',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  toggleBtnText: {
    fontSize: 12,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.7,
  },
  filesContainer: {
    gap: 8,
    paddingTop: 4,
  },
  fileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'rgba(150, 150, 150, 0.08)',
  },
  fileInfo: {
    flex: 1,
  },
  fileName: {
    fontSize: 13,
    fontWeight: '600',
    fontFamily: 'monospace',
  },
  fileSub: {
    fontSize: 11,
    opacity: 0.6,
  },
});
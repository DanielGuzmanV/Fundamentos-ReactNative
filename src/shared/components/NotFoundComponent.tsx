import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextCustom, ViewCustom } from './Themed';

interface Props {
  title?: string;
  description?: string;
  iconName?: keyof typeof Ionicons.glyphMap;
}

export const NotFoundComponent = ({
  title = 'Contenido en construcción',
  description = 'Próximamente se agregará la explicación detallada para este tema.',
  iconName = 'construct-outline',
}: Props) => {
  return (
    <ViewCustom style={styles.container}>
      <View style={styles.iconBadge}>
        <Ionicons name={iconName} size={36} color="#8E8E93" />
      </View>

      <View style={styles.containerText}>
        <TextCustom style={styles.title}>{title}</TextCustom>
        <TextCustom style={styles.description}>{description}</TextCustom>
      </View>
    </ViewCustom>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(150, 150, 150, 0.2)',
    padding: 24,
    marginVertical: 12,
  },
  iconBadge: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(142, 142, 147, 0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  containerText: {
    alignItems: 'center',
    gap: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  description: {
    fontSize: 13,
    opacity: 0.65,
    textAlign: 'center',
    lineHeight: 18,
  },
});
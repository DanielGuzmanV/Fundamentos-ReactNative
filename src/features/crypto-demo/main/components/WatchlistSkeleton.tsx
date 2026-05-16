import { Skeleton } from '@/src/shared/components/Skeleton';
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  quantity?: number
}

export const WatchlistSkeleton = ({quantity = 5}: Props) => {
  const skeletonItems = Array.from({length: quantity}, (_, i) => i);


  // Renderizamos 5 filas de esqueleto para llenar el espacio
  return (
    <View style={styles.container}>
      {skeletonItems.map((key) => (
        <View key={key} style={styles.row}>
          <View style={styles.left}>
            {/* El círculo del Rank */}
            <Skeleton width={40} height={40} borderRadius={20} />
            <View style={styles.textGroup}>
              {/* Nombre de la moneda */}
              <Skeleton width={100} height={16} />
              {/* Símbolo */}
              <Skeleton width={50} height={12} style={{ marginTop: 6 }} />
            </View>
          </View>
          <View style={styles.right}>
            {/* Precio */}
            <Skeleton width={70} height={16} />
            {/* Porcentaje */}
            <Skeleton width={45} height={12} style={{ marginTop: 6 }} />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { gap: 4 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  left: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  textGroup: { justifyContent: 'center' },
  right: { alignItems: 'flex-end' },
});
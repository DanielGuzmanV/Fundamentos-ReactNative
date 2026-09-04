import { TextCustom, ViewCustom } from '@/src/shared/components/Themed';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomButtonItemTwo } from '../../../components/basic/items_2/CustomButtomItemTwo';

export default function ComponentsScreen() {
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (msg: string) => {
    setLogs((prev) => [msg, ...prev.slice(0, 2)]);
  };

  return (
    <View style={styles.container}>
      <TextCustom style={styles.sectionTitle}>
        1. Composición de UI Reutilizable
      </TextCustom>
      <TextCustom style={styles.sectionSub}>
        Un mismo componente funcional (<TextCustom style={styles.inlineCode}>CustomButton</TextCustom>) adaptado mediante props:
      </TextCustom>

      <ViewCustom style={styles.demoCard}>
        <CustomButtonItemTwo
          title="Botón Primario"
          variant="primary"
          iconName="checkmark-circle-outline"
          onPress={() => addLog('Presionado: Primario')}
        />

        <CustomButtonItemTwo
          title="Botón Secundario"
          variant="secondary"
          iconName="star-outline"
          onPress={() => addLog('Presionado: Secundario')}
        />

        <CustomButtonItemTwo
          title="Botón Delineado"
          variant="outline"
          iconName="flash-outline"
          onPress={() => addLog('Presionado: Outline')}
        />
      </ViewCustom>

      {/* Registro de eventos de componentes */}
      {logs.length > 0 && (
        <ViewCustom style={styles.logCard}>
          <TextCustom style={styles.logTitle}>Estado / Acciones:</TextCustom>
          {logs.map((log, index) => (
            <TextCustom key={index} style={styles.logItem}>
              • {log}
            </TextCustom>
          ))}
        </ViewCustom>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 12 },
  sectionTitle: { fontSize: 16, fontWeight: '700' },
  sectionSub: { fontSize: 13, opacity: 0.7, lineHeight: 18 },
  inlineCode: { fontFamily: 'monospace', fontWeight: 'bold', color: '#34C759' },
  demoCard: {
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(150, 150, 150, 0.15)',
    gap: 12,
  },
  logCard: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(150, 150, 150, 0.15)',
    gap: 4,
  },
  logTitle: { fontSize: 12, fontWeight: '700', opacity: 0.6 },
  logItem: { fontSize: 12, fontFamily: 'monospace', color: '#34C759' },
});
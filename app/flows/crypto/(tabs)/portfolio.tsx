import { StyleSheet } from 'react-native';

import { TextCustom, ViewCustom } from '@/src/shared/components/Themed';

export default function PortfolioCryptoDemo() {
  return (
    <ViewCustom style={styles.container}>
      <TextCustom style={styles.title}>
        Gráfico de pastel (Pie chart) con la distribución de tus monedas.
      </TextCustom>
    </ViewCustom>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

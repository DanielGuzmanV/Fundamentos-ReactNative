import { StyleSheet } from 'react-native';

import { TextCustom, ViewCustom } from '@/src/shared/components/Themed';

export default function MarketsCryptoDemo() {
  return (
    <ViewCustom style={styles.container}>
      <TextCustom style={styles.title}>
        Listado de todas las criptos con precios en tiempo real y buscador.
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

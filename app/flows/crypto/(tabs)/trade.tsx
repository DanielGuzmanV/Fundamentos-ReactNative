import { StyleSheet } from 'react-native';

import { TextCustom, ViewCustom } from '@/src/shared/components/Themed';

export default function TradeCryptoDemo() {
  return (
    <ViewCustom style={styles.container}>
      <TextCustom style={styles.title}>
        Muchas apps ponen un botón destacado en el centro para "Comprar/Intercambiar".
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

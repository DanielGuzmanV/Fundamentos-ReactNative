import { StyleSheet } from 'react-native';

import { TextCustom, ViewCustom } from '@/src/shared/components/Themed';

export default function SettingsCryptoDemo() {
  return (
    <ViewCustom style={styles.container}>
      <TextCustom style={styles.title}>
        Seguridad (FaceID/Biometría), límites y cambio de moneda base (USD/EUR).
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

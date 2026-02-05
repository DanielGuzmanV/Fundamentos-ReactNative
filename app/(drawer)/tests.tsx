import { StyleSheet } from 'react-native';

import { TextCustom, ViewCustom } from '@/src/shared/components/Themed';

export default function TestScreen() {
  return (
    <ViewCustom style={styles.container}>
      <TextCustom style={styles.title}>Tab Three</TextCustom>
    </ViewCustom>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

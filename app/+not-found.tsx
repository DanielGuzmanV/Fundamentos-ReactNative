import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { TextCustom, ViewCustom } from '@/src/shared/components/Themed';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ViewCustom style={styles.container}>
        <TextCustom style={styles.title}>This screen doesn't exist.</TextCustom>

        <Link href="/" style={styles.link}>
          <TextCustom style={styles.linkText}>Go to home screen!</TextCustom>
        </Link>
      </ViewCustom>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

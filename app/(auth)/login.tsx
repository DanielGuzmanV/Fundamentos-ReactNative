import { useRouter } from 'expo-router';
import { Button, View } from 'react-native';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button 
        title="Entrar a la App (Simular Login)" 
        onPress={() => router.replace('/(drawer)')} 
      />
    </View>
  );
}
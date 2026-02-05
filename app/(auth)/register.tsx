import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';


export default function RegisterScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla de Registro</Text>
      <Button 
        title="Entrar a la App" 
        onPress={() => router.replace('/(drawer)')} 
      />
    </View>
  );
}
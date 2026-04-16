import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/core/hooks/useColorScheme';
import { Text, View } from 'react-native';

export const CryptoMainScreen = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const textColor = Colors[colorScheme].text;
  
  return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{color: textColor}}>Pantalla principal de la demo 1</Text>
        </View>
      );
};
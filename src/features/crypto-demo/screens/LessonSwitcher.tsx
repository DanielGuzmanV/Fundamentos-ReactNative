import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/core/hooks/useColorScheme';
import { Text, View } from 'react-native';
// Aquí importarás tus lecciones reales más adelante

export const LessonSwitcher = ({ id }: { id: string }) => {
  const colorScheme = useColorScheme() ?? 'light';
  const textColor = Colors[colorScheme].text;
  
  switch (id) {
    case 'jsx-components':
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{color: textColor}}>Bienvenido a la lección de JSX y Componentes</Text>
        </View>
      );
    
    case 'props-state':
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{color: textColor}}>Bienvenido a la lección de Props y Estado</Text>
        </View>
      );

    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Lección no encontrada: {id}</Text>
        </View>
      );
  }
};
import Colors from '@/src/constants/Colors';
import { useColorScheme } from '@/src/core/hooks/useColorScheme';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
  title: string;
  description: string;
  level: 'Fácil' | 'Medio' | 'Difícil';
  onPress: () => void;
}

export const ConceptCard = ({ title, description, level, onPress }: Props) => {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <Pressable 
      onPress={onPress} 
      android_ripple={{color: colorScheme}}
      style={({pressed}) => [
        styles.card, 
        { backgroundColor: Colors[colorScheme].background, 
          borderColor: Colors[colorScheme].border,
          opacity: pressed ? 0.8: 1,
          transform: [{scale: pressed ? 0.98 : 1}]
        }
      ]}
    >
      <View>
        <Text style={[styles.title, { color: Colors[colorScheme].text }]}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{level}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Sombra para Android
    elevation: 3,
    borderWidth: 1,
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  description: { fontSize: 14, color: '#666', marginTop: 4 },
  badge: { backgroundColor: '#007AFF', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  badgeText: { color: 'white', fontSize: 12, fontWeight: 'bold' }
});
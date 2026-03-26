import { ConceptCard } from '@/src/shared/components/ConceptCard';
import { ConceptHeader } from '@/src/shared/components/ConceptHeader';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';

export const CryptoMainScreen = () => {
  const router = useRouter();
  
  return (
    <ScrollView style={styles.container}>
      <ConceptHeader 
        title="Nivel Básico" 
        subtitle="Fundamentos esenciales de React Native" 
      />

      <ConceptCard 
        title="1. JSX y Componentes" 
        description="Aprende la base de la UI en React Native"
        level="Fácil"
        onPress={() => router.push('/flows/details-basic/jsx-components')}
      />
      <ConceptCard 
        title="2. Props y Estado" 
        description="Cómo pasar datos y manejar cambios"
        level="Fácil"
        onPress={() => router.push('/flows/details-basic/props-state')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 }
});
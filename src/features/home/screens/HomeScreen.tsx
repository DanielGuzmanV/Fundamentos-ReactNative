import { TextCustom, ViewCustom } from "@/src/shared/components/Themed";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { ConceptCard } from "../components/ConceptCard";
import { CONCEPTS_DATA } from "../data/concepts.data";
import { ConceptDifficulty } from "../types/concept.types";

export const HomeScreen = () => {
  const router = useRouter();

  const handleSelectLevel = (levelId: ConceptDifficulty) => {
    // Mapear el ID del nivel a la ruta correspondiente
    const routes: Record<ConceptDifficulty, string> = {
      basic: '/flows/concepts/basics',
      intermediate: '/flows/concepts/intermediate',
      advanced: '/flows/concepts/advanced'
    }
    
    const targetRoute = routes[levelId];
    if(targetRoute) {
      router.push(targetRoute as any)
    }

    console.log('Nivel seleccionado:', levelId);
  }

  return (
    <ViewCustom style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header principal */}
        <View style={styles.header}>
          <TextCustom style={styles.title}>Conceptos React Native</TextCustom>
          <TextCustom style={styles.subtitle}>
            Ruta modular de aprendizaje. Selecciona un nivel para dominar sus fundamentos y patrones de código.
          </TextCustom>
        </View>

        {/* Seccion de cards */}
        <View style={styles.cardsContainer}>
          {CONCEPTS_DATA.map((level) => (
            <ConceptCard
              key={level.id}
              level={level}
              onPress={handleSelectLevel}
            />
          ))}
        </View>

      </ScrollView>
    </ViewCustom>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  header: { 
    marginBottom: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.7,
    lineHeight: 20,
  },
  cardsContainer: {
    gap: 4,
  }
})
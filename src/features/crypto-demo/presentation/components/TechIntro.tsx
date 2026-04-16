import { TextCustom } from "@/src/shared/components/Themed"
import { StyleSheet, Text, View } from "react-native"

export const TechIntro = () => {
  return (
    <View style={styles.techStack}>
      <TextCustom style={styles.sectionTitle}>Tecnologías Usadas:</TextCustom>
      <View style={styles.badgeContainer}>
        {['TanStack Query', 'Victory Charts', 'CoinGecko API', 'Axios'].map((tech) => (
          <View key={tech} style={styles.badge}>
            <Text style={styles.badgeText}>{tech}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  techStack: { width: '100%', marginBottom: 40, alignItems: 'center' },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: '600', 
    marginBottom: 12, 
  },
  badgeContainer: { 
    flexDirection: 'row', 
    paddingVertical: 10,
    flexWrap: 'wrap', 
    gap: 8,
    justifyContent: 'center'
  },
  badge: { 
    backgroundColor: '#E1E9FF', 
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    borderRadius: 20,
  },
  badgeText: { color: '#007AFF', fontWeight: '500', fontSize: 14 },
})
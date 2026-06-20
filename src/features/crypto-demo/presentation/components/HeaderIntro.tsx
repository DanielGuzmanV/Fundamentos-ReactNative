import { ConceptHeader } from "@/src/shared/components/ConceptHeader"
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, View } from "react-native"

export const HeaderIntro = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="stats-chart" size={80} color="#007AFF" />
      </View>

      <ConceptHeader
        title="Crypto Dashboard"
        subtitle="Una aplicación de monitoreo financiero que consume datos en tiempo real de la API de CoinGecko. 
        Visualiza el rendimiento de las principales criptomonedas con gráficos interactivos."
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  iconContainer: { marginBottom: 10, marginTop: 40 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 12 },
  description: { fontSize: 16, textAlign: 'center', color: '#666', lineHeight: 24, marginBottom: 30 },
})
import { TextCustom } from "@/src/shared/components/Themed"
import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, View } from "react-native"

export const HeaderIntro = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="stats-chart" size={80} color="#007AFF" />
      </View>

      <TextCustom style={styles.title}>Crypto Dashboard</TextCustom>
      <Text style={styles.description}>
        Una aplicación de monitoreo financiero que consume datos en tiempo real de la API de CoinGecko. 
        Visualiza el rendimiento de las principales criptomonedas con gráficos interactivos.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  iconContainer: { marginBottom: 20, marginTop: 40 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 12 },
  description: { fontSize: 16, textAlign: 'center', color: '#666', lineHeight: 24, marginBottom: 30 },
})
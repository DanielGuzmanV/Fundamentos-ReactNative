import Colors from "@/src/constants/Colors";
import { useColorScheme } from "@/src/core/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  errorMessage?: string;
  onRetry: () => void;
}

export const ErrorWatchlist = ({errorMessage, onRetry}: Props) => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  return (
    <View style={styles.container}>
      <Ionicons 
        name="warning-outline"
        size={60}
        color="#EF4444"
        style={styles.icon}
      />
      <Text style={[styles.title, {color: theme.text}]}>Error al cargar favoritos</Text>
      <Text style={[styles.subtitle, {color: theme.tabIconDefault}]}>
        {errorMessage || "No se pudieron obtener los datos. Verifica tu conexión e inténtalo de nuevo."}
      </Text>
      <Pressable
        onPress={onRetry}
        style={({pressed}) => [
          styles.retryButton,
          {backgroundColor: pressed ? `${theme.tint}80` : theme.tint}
        ]}
      >
        <Text style={styles.retryButtonText}>Reintentar</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: 'transparent',
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20,
  },
  retryButton: {
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 12,
    marginTop: 10,
  },
  retryButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },
})
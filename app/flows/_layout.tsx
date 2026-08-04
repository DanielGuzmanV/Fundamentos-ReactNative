import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

const queryClient = new QueryClient();

export default function FlowsLayout() {
  return(
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: true,
          animation: 'slide_from_right',
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="crypto/(tabs)"
          options={{title: 'Crypto-Dashboard'}}
        />

        <Stack.Screen
          name="concepts/basics/index"
          options={{title: 'Conceptos Basicos'}}
        />

        <Stack.Screen
          name="concepts/intermediate/index"
          options={{title: 'Conceptos Intermedios'}}
        />

        <Stack.Screen
          name="concepts/advanced/index"
          options={{title: 'Conceptos Avanzados'}}
        />

      </Stack>
    </QueryClientProvider>
  )
}
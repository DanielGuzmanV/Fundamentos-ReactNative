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
      </Stack>
    </QueryClientProvider>
  )
}
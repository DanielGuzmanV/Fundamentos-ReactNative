import { Stack } from "expo-router";

export default function FlowsLayout() {
  return(
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
  )
}
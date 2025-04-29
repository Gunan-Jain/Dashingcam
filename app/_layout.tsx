import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="MemoryFailure" />
      <Stack.Screen name="(Alarms)" options={{ headerShown: false }} />
      <Stack.Screen name="(tab)" options={{ headerShown: false }} />
      <Stack.Screen name="(Dataoverview)" options={{ headerShown: false }} />
      <Stack.Screen name="(mine)" options={{ headerShown: false }} />
    </Stack>
  );
}

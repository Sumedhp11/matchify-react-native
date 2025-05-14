import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="(auth)/login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(auth)/verify-otp"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(auth)/edit-profile"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

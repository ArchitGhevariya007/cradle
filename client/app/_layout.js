import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      // screenOptions={{
      //   headerStyle: {
      //     backgroundColor: "#f4511e",
      //   },
      //   headerTintColor: "#fff",
      //   headerTitleStyle: {
      //     fontWeight: "bold",
      //   },
      // }}
    >
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

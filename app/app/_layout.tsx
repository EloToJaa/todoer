import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "../global.css";
import ThemeProvider from "@/components/ThemeProvider";

export default function Layout() {
  return (
    <ThemeProvider name="default">
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: true }} />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </ThemeProvider>
  );
}

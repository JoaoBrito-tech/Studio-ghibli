import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="salgados" />
      <Stack.Screen name="doces" />
      <Stack.Screen name="bebidas" />
      <Stack.Screen name="lamen" />
      <Stack.Screen name="ovos-bacon" />
      <Stack.Screen name="sashimi" />
      <Stack.Screen name="bento" />
      <Stack.Screen name="creampuff-totoro" />
      <Stack.Screen name="bolo-kiki" />
      <Stack.Screen name="siberia" />
      <Stack.Screen name="torta-peixe-abobora" />
      <Stack.Screen name="matcha" />
      <Stack.Screen name="sake" />
      <Stack.Screen name="infusao-frutas" />
      <Stack.Screen name="bebida-torta" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  )
}

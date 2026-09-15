import { Stack } from 'expo-router'

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            {/* 1. Tela Inicial (Login / Entrada) */}
            <Stack.Screen name="index" />
        </Stack>
    )
}
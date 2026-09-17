import { Tabs } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { MaterialIcons } from '@react-native-vector-icons/material-icons'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'

export default function TabsLayout() {

  const insets = useSafeAreaInsets()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Cores.pEscura,
        tabBarInactiveTintColor: Cores.pEscura,
        tabBarStyle: {
          backgroundColor: Cores.primaria,
          borderTopWidth: 0,
          height: 60 + (insets.bottom || 0),
          paddingBottom: insets.bottom || 0,
          paddingTop: 8
        }
      }}
    >
      <Tabs.Screen
        name='sobre'
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="info" size={Fontes.grande2} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name='equipe'
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="badge" size={Fontes.grande2} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name='cliente'
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="fastfood" size={Fontes.grande2} color={color} />
          )
        }}
      />
    </Tabs>
  )
}

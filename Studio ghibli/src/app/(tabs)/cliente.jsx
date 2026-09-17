import { View, Text } from 'react-native'
import {Cabecalho} from '@/components/Cabecalho';


export default function cliente() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Cabecalho titulo={'CLIENTE'}/>
      <Text>Mexer depois, so para não dar erro</Text>
      
    </View>
  )
}
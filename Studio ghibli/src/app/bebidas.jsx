import { View, Text } from 'react-native'
import {Cabecalho} from '@/components/Cabecalho';

export default function bebidas() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Cabecalho titulo={'BEBIDAS'}/>
      
      <Text>Bebidasssssssss</Text>
      
    </View>
  )
}
import { View, Text } from 'react-native'
import {Cabecalho} from '@/components/Cabecalho';

export default function salgados() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Cabecalho titulo={'SALGADOS'}/>
      <Text>Salgadosssssss</Text>
      
    </View>
  )
}
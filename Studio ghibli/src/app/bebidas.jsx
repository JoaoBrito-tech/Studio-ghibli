import { Text, StyleSheet, Pressable, Image, ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'
import { Cabecalho } from '@/components/Cabecalho'

export default function Bebidas() {
  return (
    <SafeAreaView style={estilos.conteiner}>
      <Cabecalho titulo="BEBIDAS" />
      <ScrollView contentContainerStyle={estilos.conteudo}>

        <Pressable style={estilos.card} onPress={() => router.push('/matcha')}>
          <Image style={estilos.imagem} source={require('@/assets/images/layout/image(8).png')} />
          <View style={estilos.fundoPreco}>
            <Text style={estilos.preco}>R$ 14,90</Text>
          </View>
        </Pressable>

        <Pressable style={estilos.card} onPress={() => router.push('/sake')}>
          <Image style={estilos.imagem} source={require('@/assets/images/layout/image(9).png')} />
          <View style={estilos.fundoPreco}>
            <Text style={estilos.preco}>R$ 28,00</Text>
          </View>
        </Pressable>

        <Pressable style={estilos.card} onPress={() => router.push('/infusao-frutas')}>
          <Image style={estilos.imagem} source={require('@/assets/images/layout/image(10).png')} />
          <View style={estilos.fundoPreco}>
            <Text style={estilos.preco}>R$ 16,50</Text>
          </View>
        </Pressable>

        <Pressable style={estilos.card} onPress={() => router.push('/bebida-torta')}>
          <Image style={estilos.imagem} source={require('@/assets/images/layout/image(18).png')} />
          <View style={estilos.fundoPreco}>
            <Text style={estilos.preco}>R$ 32,90</Text>
          </View>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: Cores.p,
  },
  conteudo: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    gap: 20,
  },
  card: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: Cores.pClara,
    borderRadius: 20,
    padding: 12,
    borderWidth: 1,
    borderColor: Cores.sPreto,
  },
  imagem: {
    width: '100%',
    height: 180,
    borderRadius: 14,
  },
  fundoPreco: {
    backgroundColor: Cores.p,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 10,
  },
  preco: {
    fontFamily: Fontes.baseBold,
    fontSize: Fontes.medio1,
    color: Cores.pEscura,
  },
})
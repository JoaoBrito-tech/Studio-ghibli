import { Text, StyleSheet, Pressable, Image, ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'
import { Cabecalho } from '@/components/Cabecalho'

export default function Salgados() {
  return (
    <SafeAreaView style={estilos.conteiner}>
      <Cabecalho titulo="SALGADOS" />
      <ScrollView contentContainerStyle={estilos.conteudo}>

        <Pressable style={estilos.card} onPress={() => router.push('/lamen')}>
          <Image style={estilos.imagem} source={require('@/assets/images/layout/image.png')} />
          <View style={estilos.fundoPreco}>
            <Text style={estilos.preco}>R$ 38,50</Text>
          </View>
        </Pressable>

        <Pressable style={estilos.card} onPress={() => router.push('/ovos-bacon')}>
          <Image style={estilos.imagem} source={require('@/assets/images/layout/image(1).png')} />
          <View style={estilos.fundoPreco}>
            <Text style={estilos.preco}>R$ 24,99</Text>
          </View>
        </Pressable>

        <Pressable style={estilos.card} onPress={() => router.push('/sashimi')}>
          <Image style={estilos.imagem} source={require('@/assets/images/layout/image(2).png')} />
          <View style={estilos.fundoPreco}>
            <Text style={estilos.preco}>R$ 67,99</Text>
          </View>
        </Pressable>

        <Pressable style={estilos.card} onPress={() => router.push('/bento')}>
          <Image style={estilos.imagem} source={require('@/assets/images/layout/image(3).png')} />
          <View style={estilos.fundoPreco}>
            <Text style={estilos.preco}>R$ 42,99</Text>
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
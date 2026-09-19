import { Text, StyleSheet, Image, View, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'

export default function Item() {
  return (
    <SafeAreaView style={estilos.conteiner}>
      <View style={estilos.cabecalho}>
        <Pressable style={estilos.botaoVoltar} onPress={() => router.back()}>
          <Text style={estilos.textoVoltar}>Voltar</Text>
        </Pressable>
      </View>

      <View style={estilos.conteudo}>
        <Image style={estilos.imagem} source={require('@/assets/images/layout/image(18).png')} />
        <Text style={estilos.categoria}>Bebidas</Text>
        <Text style={estilos.nome}>Torta de Peixe e Abóbora</Text>
        <Text style={estilos.preco}>R$ 32,90</Text>
        <Text style={estilos.descricao}>Torta assada recheada com abóbora bem temperada e peixe, coberta por uma crosta dourada e decorada no topo.</Text>
      </View>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  conteiner: { flex: 1, backgroundColor: Cores.p, padding: 20 },
  cabecalho: { width: '100%' },
  botaoVoltar: {
    width: 90,
    height: 40,
    borderWidth: 1.5,
    borderColor: Cores.pEscura,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoVoltar: {
    fontFamily: Fontes.baseBold,
    fontSize: Fontes.medio1,
    color: Cores.pEscura,
  },
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
  },
  imagem: { width: 260, height: 260, borderRadius: 20, marginBottom: 20 },
  categoria: {
    fontFamily: Fontes.baseRegular,
    fontSize: Fontes.medio1,
    color: Cores.s,
    marginBottom: 5,
  },
  nome: {
    fontFamily: Fontes.baseBold,
    fontSize: Fontes.grande1,
    color: Cores.pEscura,
    textAlign: 'center',
    marginBottom: 10,
  },
  preco: {
    fontFamily: Fontes.baseBold,
    fontSize: Fontes.medio2,
    color: Cores.pEscura,
    marginBottom: 15,
  },
  descricao: {
    fontFamily: Fontes.baseRegular,
    fontSize: Fontes.medio1,
    color: Cores.s,
    textAlign: 'center',
    lineHeight: 22,
  },
})

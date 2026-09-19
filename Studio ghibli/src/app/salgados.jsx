import { Text, StyleSheet, Image, View, ScrollView, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { Cabecalho } from '@/components/Cabecalho'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'

export default function Salgados() {
  return (
    <SafeAreaView style={estilos.conteiner}>
      <Cabecalho titulo="SALGADOS" />
      <ScrollView contentContainerStyle={estilos.conteudo}>

        <Pressable style={estilos.card} onPress={() => router.push('/lamen')}>
          <View style={estilos.containerImagem}>
            <Image style={estilos.imagem} source={require('@/assets/images/layout/image.png')} />
            <Text style={estilos.preco}>R$ 38,90</Text>
          </View>

          <View style={estilos.texto}>
            <Text style={estilos.titulo}>Lamen</Text>
            <Text style={estilos.descricao}>
              Massa macia de macarrão em caldo saboroso e quente, acompanhado de fatias de carne, ovo cozido e cebolinha.
            </Text>
          </View>
        </Pressable>

        <Pressable style={estilos.card} onPress={() => router.push('/ovos-bacon')}>
          <View style={estilos.texto}>
            <Text style={estilos.titulo}>Ovos com Bacon na Frigideira</Text>
            <Text style={estilos.descricao}>
              Ovos fritos na hora acompanhados de fatias crocantes de bacon dourado na frigideira.
            </Text>
          </View>

          <View style={estilos.containerImagem}>
            <Image style={estilos.imagem} source={require('@/assets/images/layout/image(1).png')} />
            <Text style={estilos.preco}>R$ 24,50</Text>
          </View>
        </Pressable>

        <Pressable style={estilos.card} onPress={() => router.push('/sashimi')}>
          <View style={estilos.containerImagem}>
            <Image style={estilos.imagem} source={require('@/assets/images/layout/image(2).png')} />
            <Text style={estilos.preco}>R$ 67,00</Text>
          </View>

          <View style={estilos.texto}>
            <Text style={estilos.titulo}>Prato de Sashimi e Frutos do Mar</Text>
            <Text style={estilos.descricao}>
              Seleção de peixes frescos e frutos do mar com fatias de limão e acompanhamentos tradicionais.
            </Text>
          </View>
        </Pressable>

        <Pressable style={estilos.card} onPress={() => router.push('/bento')}>
          <View style={estilos.texto}>
            <Text style={estilos.titulo}>Bento (Marmita Japonesa)</Text>
            <Text style={estilos.descricao}>
              Marmita tradicional com arroz, peixe grelhado, conservas e acompanhamentos equilibrados.
            </Text>
          </View>

          <View style={estilos.containerImagem}>
            <Image style={estilos.imagem} source={require('@/assets/images/layout/image(3).png')} />
            <Text style={estilos.preco}>R$ 42,90</Text>
          </View>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  conteiner: { flex: 1, backgroundColor: Cores.p },
  conteudo: { padding: 20, gap: 18 },
  card: {
    width: '100%',
    minHeight: 170,
    backgroundColor: Cores.p,
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  containerImagem: { alignItems: 'center' },
  imagem: { width: 130, height: 130, borderRadius: 16 },
  preco: {
    fontFamily: Fontes.baseBold,
    fontSize: Fontes.medio1,
    color: Cores.pEscura,
    marginTop: 6,
  },
  texto: { flex: 1, justifyContent: 'center' },
  titulo: {
    fontFamily: Fontes.baseBold,
    fontSize: Fontes.medio2,
    color: Cores.pEscura,
    marginBottom: 8,
  },
  descricao: {
    fontFamily: Fontes.baseRegular,
    fontSize: Fontes.medio1,
    color: Cores.s,
  },
})

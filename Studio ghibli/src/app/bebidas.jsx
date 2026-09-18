import { Text, StyleSheet, Image, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Cabecalho } from '@/components/Cabecalho'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'

export default function bebidas() {
  return (
    <SafeAreaView style={estilos.conteiner}>

      <Cabecalho titulo={'BEBIDAS'} />

      <ScrollView style={estilos.conteudo}>

        <View style={estilos.card}>
          <View style={estilos.containerImagem}>
            <Image
              style={estilos.imagem}
              source={require('@/assets/images/layout/image(8).png')}
            />
            <Text style={estilos.preco}>R$ 14,90</Text>
          </View>

          <View style={estilos.texto}>
            <Text style={estilos.titulo}>Matcha na Xícara</Text>
            <Text style={estilos.descricao}>
              Chá verde artesanal morno, servido em louça delicada para proporcionar um momento de relaxamento e conforto.
            </Text>
          </View>
        </View>

        <View style={estilos.card}>
          <View style={estilos.texto}>
            <Text style={estilos.titulo}>Garrafas de Bebidas Tradicionais / Saquê</Text>
            <Text style={estilos.descricao}>
              Seleção de bebidas tradicionais engarrafadas, perfeitas para acompanhar pratos especiais.
            </Text>
          </View>

          <View style={estilos.containerImagem}>
            <Image
              style={estilos.imagem}
              source={require('@/assets/images/layout/image(9).png')}
            />
            <Text style={estilos.preco}>R$ 28,00</Text>
          </View>
        </View>

        <View style={estilos.card}>
          <View style={estilos.containerImagem}>
            <Image
              style={estilos.imagem}
              source={require('@/assets/images/layout/image(10).png')}
            />
            <Text style={estilos.preco}>R$ 16,50</Text>
          </View>

          <View style={estilos.texto}>
            <Text style={estilos.titulo}>Infusão de Frutas</Text>
            <Text style={estilos.descricao}>
              Chá leve e aromático servido com fatias frescas de limão e acompanhado de biscoitos finos.
            </Text>
          </View>
        </View>

        <View style={estilos.card}>
          <View style={estilos.texto}>
            <Text style={estilos.titulo}>Torta de Peixe e Abóbora</Text>
            <Text style={estilos.descricao}>
              Torta assada recheada com abóbora bem temperada e peixe, coberta por uma crosta dourada e decorada no topo.
            </Text>
          </View>

          <View style={estilos.containerImagem}>
            <Image
              style={estilos.imagem}
              source={require('@/assets/images/layout/image(18).png')}
            />
            <Text style={estilos.preco}>R$ 32,90</Text>
          </View>
        </View>

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
    padding: 20,
    gap: 18,
  },

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

  containerImagem: {
    alignItems: 'center',
  },

  imagem: {
    width: 130,
    height: 130,
    borderRadius: 16,
  },

  preco: {
    fontFamily: Fontes.baseBold,
    fontSize: Fontes.medio1,
    color: Cores.pEscura,
    marginTop: 6,
  },

  texto: {
    flex: 1,
    justify: 'center',
  },

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
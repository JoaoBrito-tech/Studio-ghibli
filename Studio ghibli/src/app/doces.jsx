import { Text, StyleSheet, Image, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Cabecalho } from '@/components/Cabecalho'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'

export default function doces() {
  return (
    <SafeAreaView style={estilos.conteiner}>

      <Cabecalho titulo={'DOCES'} />

      <ScrollView Style={estilos.conteudo}>

        <View style={estilos.card}>
          <View style={estilos.containerImagem}>
            <Image
              style={estilos.imagem}
              source={require('@/assets/images/layout/image(4).png')}
            />
            <Text style={estilos.preco}>R$ 18,90</Text>
          </View>

          <View style={estilos.texto}>
            <Text style={estilos.titulo}>
              Cream Puff de Totoro (Choux Cream)
            </Text>
            <Text style={estilos.descricao}>
              Sobremesa delicada em formato de Totoro, recheada com um creme leve, aveludado e finalizada com detalhes artesanais.
            </Text>
          </View>
        </View>

        <View style={estilos.card}>
          <View style={estilos.texto}>
            <Text style={estilos.titulo}>
              Bolo de Chocolate da Kiki
            </Text>
            <Text style={estilos.descricao}>
              Bolo de chocolate fofinho coberto com uma camada lisa de ganache e decorado com o desenho da bruxinha Kiki.
            </Text>
          </View>

          <View style={estilos.containerImagem}>
            <Image
              style={estilos.imagem}
              source={require('@/assets/images/layout/image(5).png')}
            />
            <Text style={estilos.preco}>R$ 22,00</Text>
          </View>
        </View>

        <View style={estilos.card}>
          <View style={estilos.containerImagem}>
            <Image
              style={estilos.imagem}
              source={require('@/assets/images/layout/image(6).png')}
            />
            <Text style={estilos.preco}>R$ 15,50</Text>
          </View>

          <View style={estilos.texto}>
            <Text style={estilos.titulo}>
              Siberia (Bolo recheado com Yokan)
            </Text>
            <Text style={estilos.descricao}>
              Doce tradicional japonês composto por fatias de pão de ló macio recheadas com uma camada firme de pasta de feijão azuki (yokan).
            </Text>
          </View>
        </View>

        <View style={estilos.card}>
          <View style={estilos.texto}>
            <Text style={estilos.titulo}>
              Torta de Peixe e Abóbora
            </Text>
            <Text style={estilos.descricao}>
              Torta assada recheada com abóbora bem temperada e peixe, coberta por uma crosta dourada e decorada no topo.
            </Text>
          </View>

          <View style={estilos.containerImagem}>
            <Image
              style={estilos.imagem}
              source={require('@/assets/images/layout/image(7).png')}
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
    justifyContent: 'center',
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
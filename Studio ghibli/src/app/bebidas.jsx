import { Text, StyleSheet, Image, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Cabecalho } from '@/components/Cabecalho'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'


export default function bebidas() {

  return (
    <SafeAreaView style={estilos.conteiner}>

      <Cabecalho titulo={'BEBIDAS'} />

      <View
        style={estilos.conteudo}
      >

        <View style={estilos.card}>
          <Image
            style={estilos.imagem}
            source={require('@/assets/images/layout/image(8).png')}
          />

          <View style={estilos.texto}>
            <Text style={estilos.titulo}>
             Matcha na Xícara
            </Text>

            <Text style={estilos.descricao}>
             Chá verde artesanal morno, servido em louça delicada para proporcionar um momento de relaxamento e conforto.
            </Text>
          </View>
        </View>

        <View style={estilos.card}>
          <View style={estilos.texto}>
            <Text style={estilos.titulo}>
             Garrafas de Bebidas Tradicionais / Saquê
            </Text>

            <Text style={estilos.descricao}>
            Seleção de bebidas tradicionais engarrafadas, perfeitas para acompanhar pratos especiais.
            </Text>
          </View>

          <Image
            style={estilos.imagem}
            source={require('@/assets/images/layout/image(9).png')}
          />
        </View>

        <View style={estilos.card}>
          <Image
            style={estilos.imagem}
            source={require('@/assets/images/layout/image(10).png')}
          />

          <View style={estilos.texto}>
            <Text style={estilos.titulo}>
              Infusão de Frutas
            </Text>

            <Text style={estilos.descricao}>
             Chá leve e aromático servido com fatias frescas de limão e acompanhado de biscoitos finos.
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

          <Image
            style={estilos.imagem}
            source={require('@/assets/images/layout/image(18).png')}
          />
        </View>
      </View>

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

  imagem: {
    width: 130,
    height: 130,
    borderRadius: 16,
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
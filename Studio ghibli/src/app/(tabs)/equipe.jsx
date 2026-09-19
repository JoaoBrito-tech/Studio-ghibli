import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Cabecalho } from '@/components/Cabecalho'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'

export default function equipe() {
  return (
    <SafeAreaView style={estilos.conteiner}>
      <Cabecalho titulo={'EQUIPE'} />

      <ScrollView contentContainerStyle={estilos.conteudo}>

        <View style={estilos.topo}>
          <Text style={estilos.titulo}>NOSSA EQUIPE</Text>
          <Text style={estilos.subtitulo}>Os sócios do Restaurante</Text>
          <View style={estilos.linha} />
        </View>

        <View style={estilos.card}>
          <Image
            style={estilos.imagem}
            source={require('@/assets/images/layout/imagem enzo.jpeg')}
          />
          <View style={estilos.info}>
            <Text style={estilos.nome}>Enzo Basso Martins</Text>
            <Text style={estilos.descricao}>Idealizador, back-end e Chefe-Executivo</Text>
          </View>
        </View>

        <View style={estilos.card}>
          <Image
            style={estilos.imagem}
            source={require('@/assets/images/layout/imagem mini.jpeg')}
          />
          <View style={estilos.info}>
            <Text style={estilos.nome}>João Paulo Brito da SIlva</Text>
            <Text style={estilos.descricao}>Front-end e Gerente</Text>
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
    padding: 24,
    gap: 20,
  },

  topo: {
    alignItems: 'center',
    marginBottom: 10,
  },

  titulo: {
    fontFamily: Fontes.baseBold,
    fontSize: Fontes.medio2,
    color: Cores.pEscura,
  },

  subtitulo: {
    fontFamily: Fontes.baseRegular,
    fontSize: Fontes.medio1,
    color: Cores.s,
    marginTop: 4,
  },


  linha: {
    width: '100%',
    height: 1,
    backgroundColor: Cores.pEscura,
    marginTop: 14,
    opacity: 0.3,
  },

  card: {
    width: '100%',
    alignItems: 'center',
    gap: 12,
  },

  imagem: {
    width: '100%',
    height: 260,
    borderRadius: 12,
    resizeMode: 'cover',
  },

  info: {
    alignItems: 'center',
    gap: 4,
  },

  nome: {
    fontFamily: Fontes.baseBold,
    fontSize: Fontes.medio2,
    color: Cores.pEscura,
  },

  descricao: {
    fontFamily: Fontes.baseRegular,
    fontSize: Fontes.medio1,
    color: Cores.s,
  },
})
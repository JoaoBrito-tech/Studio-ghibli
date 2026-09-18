import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Cabecalho } from '@/components/Cabecalho'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'

export default function cliente() {
  return (
    <SafeAreaView style={estilos.conteiner}>
      <Cabecalho titulo={'CLIENTE'} />

      <ScrollView style={estilos.conteudo}>

        <View style={estilos.topo}>
          <Text style={estilos.titulo}>GUIA DO CLIENTE</Text>
          <Text style={estilos.subtitulo}>Informações e Normas da Casa</Text>
          <View style={estilos.linha} />
        </View>

        <View style={estilos.topicos}>
          <Text style={estilos.tituloTopicos}>1. Horário de Funcionamento</Text>
          <Text style={estilos.texto}>
            Abertos de Terça a Domingo, das 11h30 às 22h00. A cozinha encerra os pedidos 30 minutos antes do fechamento.
          </Text>
        </View>

        <View style={estilos.topicos}>
          <Text style={estilos.tituloTopicos}>2. Pedidos e Atendimento</Text>
          <Text style={estilos.texto}>
            Todos os pratos são preparados na hora para garantir a máxima qualidade e frescor. O tempo médio de preparo varia entre 15 e 30 minutos.
          </Text>
        </View>

        <View style={estilos.topicos}>
          <Text style={estilos.tituloTopicos}>3. Reservas e Mesas</Text>
          <Text style={estilos.texto}>
            As mesas são ocupadas por ordem de chegada. Para grupos acima de 6 pessoas, recomendamos realizar a reserva com antecedência.
          </Text>
        </View>

        <View style={estilos.topicos}>
          <Text style={estilos.tituloTopicos}>4. Formas de Pagamento</Text>
          <Text style={estilos.texto}>
            Aceitamos Pix, cartões de crédito e débito das principais bandeiras. Não aceitamos cheques.
          </Text>
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
  },

  topo: {
    alignItems: 'center',
    marginBottom: 24,
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

  topicos: {
    marginBottom: 20,
  },

  tituloTopicos: {
    fontFamily: Fontes.baseBold,
    fontSize: Fontes.medio2,
    color: Cores.pEscura,
    marginBottom: 6,
  },

  texto: {
    fontFamily: Fontes.baseRegular,
    fontSize: Fontes.medio1,
    color: Cores.s,
    lineHeight: 22,
  },
})
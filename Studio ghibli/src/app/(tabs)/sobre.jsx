import { Text, StyleSheet, Image, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Cabecalho } from '@/components/Cabecalho'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'

export default function sobre() {
  return (
    <SafeAreaView style={estilos.conteiner}>

      <Cabecalho titulo={'SOBRE'} />

      {/* 
        Substituí a <View> principal pelo <ScrollView> para a tela rolar. (ótima descoberta)
      */}
      <ScrollView style={estilos.conteudo}>

        <View style={estilos.card}>
          <Image
            style={estilos.imagem}
            source={require('@/assets/images/layout/image(11).png')}
          />

          <View style={estilos.texto}>
            <Text style={estilos.titulo}>
              A Fundação e o Legado
            </Text>

            <Text style={estilos.descricao}>
              Fundado em 1985 pelos diretores Hayao Miyazaki e Isao Takahata,
              ao lado do produtor Toshio Suzuki, o estúdio revolucionou a animação
              japonesa ao focar em narrativas humanas, poéticas e repletas de sensibilidade.
            </Text>
          </View>
        </View>

        <View style={estilos.card}>
          <View style={estilos.texto}>
            <Text style={estilos.titulo}>
              Temas e Filosofia
            </Text>

            <Text style={estilos.descricao}>
             As produções do estúdio abordam com frequência o respeito à natureza,
             o pacifismo, o amadurecimento pessoal e o protagonismo feminino, 
             trazendo reflexões profundas sobre o mundo e as relações humanas.
            </Text>
          </View>

          <Image
            style={estilos.imagem}
            source={require('@/assets/images/layout/image(13).png')}
          />
        </View>

        <View style={estilos.card}>
          <Image
            style={estilos.imagem}
            source={require('@/assets/images/layout/image(14).png')}
          />

          <View style={estilos.texto}>
            <Text style={estilos.titulo}>
              A Magia do Cotidiano e do Fantástico
            </Text>

            <Text style={estilos.descricao}>
             Com uma capacidade única de transformar momentos simples do dia a dia
             em pura poesia visual, o Ghibli mistura o folclore tradicional com mundos 
             fantásticos e trilhas sonoras marcantes.
            </Text>
          </View>
        </View>

        <View style={estilos.card}>
          <View style={estilos.texto}>
            <Text style={estilos.titulo}>
             Reconhecimento Mundial
            </Text>

            <Text style={estilos.descricao}>
             Suas obras conquistaram o cinema global, arrecadando prêmios prestigiados como 
             o Oscar de Melhor Filme de Animação por A Viagem de Chihiro e consolidando
             o estúdio como uma referência cultural eterna.
            </Text>
          </View>

          <Image
            style={estilos.imagem}
            source={require('@/assets/images/layout/image(15).png')}
          />
        </View>

        <View style={estilos.card}>
          <Image
            style={estilos.imagem}
            source={require('@/assets/images/layout/image(16).png')}
          />

          <View style={estilos.texto}>
            <Text style={estilos.titulo}>
              A Arte da Animação Tradicional
            </Text>

            <Text style={estilos.descricao}>
             Mesmo com o avanço das tecnologias digitais, o estúdio se destaca pelo compromisso
             em manter a animação feita à mão, garantindo uma riqueza de detalhes artesanais e
             uma expressividade única em cada quadro.
            </Text>
          </View>
        </View>

        <View style={estilos.card}>
          <View style={estilos.texto}>
            <Text style={estilos.titulo}>
             Impacto Cultural e Atemporalidade
            </Text>

            <Text style={estilos.descricao}>
             O alcance do estúdio vai muito além das telas de cinema, influenciando artistas globais,
            inspirando parques temáticos e criando um acervo de obras atemporais que continuam a emocionar novas gerações.
            </Text>
          </View>

          <Image
            style={estilos.imagem}
            source={require('@/assets/images/layout/image(17).png')}
          />
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
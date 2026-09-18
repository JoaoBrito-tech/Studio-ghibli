import { Text, StyleSheet, Image, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Cabecalho } from '@/components/Cabecalho'
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'

export default function sobre() {
  return (
    <SafeAreaView style={estilos.conteiner}>

      <Cabecalho titulo={'SOBRE'} />

      <ScrollView contentContainerStyle={estilos.conteudo}> {/* contentContainerStyle para aplicar o padding e gap a toda tela que rola, para não bugar e ficar tudo muito proximo*/}

        {/* 1. Imagem em cima e texto embaixo */}
        <View style={[estilos.card, estilos.cardCimaBaixo]}>
          <Image
            style={estilos.imagemGrande}
            source={require('@/assets/images/layout/image(11).png')}
          />
          <View style={estilos.textoCentro}>
            <Text style={estilos.tituloCentro}>
              A Fundação e o Legado
            </Text>
            <Text style={estilos.descricaoCentro}>
              Fundado em 1985 pelos diretores Hayao Miyazaki e Isao Takahata,
              ao lado do produtor Toshio Suzuki, o estúdio revolucionou a animação
              japonesa ao focar em narrativas humanas, poéticas e repletas de sensibilidade.
            </Text>
          </View>
        </View>

        {/* 2. Imagem na esquerda e texto Direita */}
        <View style={estilos.card}>
          <Image
            style={estilos.imagemPequena}
            source={require('@/assets/images/layout/image(13).png')}
          />
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
        </View>

        {/* 3. Imagem em cima e texto embaixo */}
        <View style={[estilos.card, estilos.cardCimaBaixo]}>
          <Image
            style={estilos.imagemGrande}
            source={require('@/assets/images/layout/image(14).png')}
          />
          <View style={estilos.textoCentro}>
            <Text style={estilos.tituloCentro}>
              A Magia do Cotidiano e do Fantástico
            </Text>
            <Text style={estilos.descricaoCentro}>
              Com uma capacidade única de transformar momentos simples do dia a dia
              em pura poesia visual, o Ghibli mistura o folclore tradicional com mundos
              fantásticos e trilhas sonoras marcantes.
            </Text>
          </View>
        </View>

        {/* 4. Texto na esquerda e imagem na direita) */}
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
            style={estilos.imagemPequena}
            source={require('@/assets/images/layout/image(15).png')}
          />
        </View>

        {/* 5. Imagem na esquerda e texto na direita) */}
        <View style={estilos.card}>
          <Image
            style={estilos.imagemPequena}
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

        {/* 6. Imagem em cima e texto embaixo */}
        <View style={[estilos.card, estilos.cardCimaBaixo]}>
          <Image
            style={estilos.imagemGrande}
            source={require('@/assets/images/layout/image(17).png')}
          />
          <View style={estilos.textoCentro}>
            <Text style={estilos.tituloCentro}>
              Impacto Cultural e Atemporalidade
            </Text>
            <Text style={estilos.descricaoCentro}>
              O alcance do estúdio vai muito além das telas de cinema, influenciando artistas globais,
              inspirando parques temáticos e criando um acervo de obras atemporais que continuam a emocionar novas gerações.
            </Text>
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
    gap: 25,
  },

  card: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  /* Para a imagem ficar em cima e o texto embaixo */
  cardCimaBaixo: {
    flexDirection: 'column',
  },

  /* Imagem para lado a lado */
  imagemPequena: {
    width: 130,
    height: 130,
    borderRadius: 16,
  },

  /* Imagem de fora a fora na horizontal */
  imagemGrande: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },

  texto: {
    flex: 1,
  },

  textoCentro: {
    width: '100%',
    alignItems: 'center',
  },

  titulo: {
    fontFamily: Fontes.baseBold,
    fontSize: Fontes.medio2,
    color: Cores.pEscura,
    marginBottom: 6,
  },

  tituloCentro: {
    fontFamily: Fontes.baseBold,
    fontSize: Fontes.medio2,
    color: Cores.pEscura,
    marginBottom: 6,
    textAlign: 'center',
  },

  descricao: {
    fontFamily: Fontes.baseRegular,
    fontSize: Fontes.medio1,
    color: Cores.s,
  },

  descricaoCentro: {
    fontFamily: Fontes.baseRegular,
    fontSize: Fontes.medio1,
    color: Cores.s,
    textAlign: 'center',
  },
})
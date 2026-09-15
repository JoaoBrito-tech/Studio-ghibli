import { Text, StyleSheet, Pressable, Image, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { Cores } from '../constants/Cores'
import { Fontes } from '../constants/Fontes'

export default function Index() {
    return (
        <SafeAreaView style={estilos.conteiner}>
            <View style={estilos.tamanhoImagem}>
                <Image
                    style={estilos.imagem}
                    source={require('@/assets/images/layout/fundo.png')}
                />
            </View>

            <View style={estilos.painelAcoes}>
                <View style={estilos.headerTexto}>
                    <Text style={estilos.titulo}>Studio Ghibli</Text>
                    <Text style={estilos.subtitulo}>Aproveite nosso restaurante dos animes!</Text>
                </View>

                <Pressable
                    style={estilos.botaoEntrar}
                    android_ripple={{ color: Cores.pClara }}
                >
                    <Text style={estilos.textoEntrar}>Entrar na Conta</Text>
                </Pressable>

                <View style={estilos.menu}>
                    <Pressable
                        style={estilos.botao}
                        android_ripple={{ color: Cores.pClara }}
                    >
                        <Text style={estilos.texto}>Bebidas</Text>
                    </Pressable>

                    <Pressable
                        style={estilos.botao}
                        android_ripple={{ color: Cores.pClara }}
                    >
                        <Text style={estilos.texto}>Doces</Text>
                    </Pressable>

                    <Pressable
                        style={estilos.botao}
                        android_ripple={{ color: Cores.pClara }}
                    >
                        <Text style={estilos.texto}>Salgados</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}
const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: Cores.p,
        padding: 20,
        justifyContent: 'center',
    },
    tamanhoImagem: {
        width: '100%',
        height: '38%',
        borderRadius: 24,
        overflow: 'hidden', // Recorta a imagem para ficar no tamanho perfeito para o borderRadius (ótima descoberta)
    },
    imagem: {
        width: '100%',
        height: '100%',
    },
    painelAcoes: {
        flex: 1,
        justifyContent: 'space-evenly', // Mantém de forma igual o espaçamento entre os elementos - botão, titulo, subtitulo e etc. (ótima descoberta)
        alignItems: 'center',
        paddingTop: 8,
    },
    headerTexto: {
        alignItems: 'center',
    },
    titulo: {
        fontFamily: Fontes.logo,
        fontSize: Fontes.extraGrande,
        color: Cores.pEscura,
    },
    subtitulo: {
        fontFamily: Fontes.baseRegular,
        fontSize: Fontes.medio2,
        color: Cores.s,
        marginTop: -10,
    },
    botaoEntrar: {
        height: 48,
        width: '100%',
        backgroundColor: Cores.pEscura,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoEntrar: {
        fontFamily: Fontes.baseBold,
        fontSize: Fontes.medio1,
        color: Cores.p,
    },
    menu: {
        width: '100%',
        gap: 10,
    },
    botao: {
        height: 46,
        width: '100%',
        borderWidth: 1.5,
        borderColor: Cores.pEscura,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontFamily: Fontes.baseBold,
        fontSize: Fontes.medio1,
        color: Cores.pEscura,
    },
})
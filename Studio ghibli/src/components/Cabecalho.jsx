import { Pressable, StyleSheet, View, Text } from "react-native";
import { router } from 'expo-router';
import {MaterialIcons} from '@react-native-vector-icons/material-icons';
import { Cores } from '@/constants/Cores'
import { Fontes } from '@/constants/Fontes'

export function Cabecalho({titulo}){

    const voltarLogin = () => {
        router.replace('/')
    }

    return(
        <View style={estilos.conteiner}>
            <Text style={estilos.titulo}>{titulo}</Text>
        <Pressable  
            style={estilos.logout}
            onPress={voltarLogin} 
        >
            <MaterialIcons 
                name='logout' 
                size={Fontes.grande2}
                color={Cores.p}
            />
        </Pressable>
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Cores.s,
        height: 60,
    },
     titulo: {
        fontFamily: Fontes.logo,
        fontSize: Fontes.grande1,
        color: Cores.p,
        textAlign: 'center',
    },
    logout:{
        position: 'absolute',
        left: 10
    },

})
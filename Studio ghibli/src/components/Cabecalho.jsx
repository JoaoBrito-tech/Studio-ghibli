import { Pressable, StyleSheet, View, Text } from "react-native";
import { router } from 'expo-router';
import {MaterialIcons} from '@react-native-vector-icons/material-icons';

export function Cabecalho({titulo}){

    const voltarLogin = () => {
        router.replace('/')
    }

    return(
        <View>
            <Text>{titulo}</Text>
        <Pressable onPress={voltarLogin}>
            <MaterialIcons name='logout'/>
        </Pressable>
        </View>
    )
}
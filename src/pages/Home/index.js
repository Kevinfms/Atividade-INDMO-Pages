import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";



const logo = require('../../../assets/logo-senai.png')

export default function Home() {



    
    return (
        <SafeAreaView style={[styles.container]}>

            <View>
                <Image source={logo} style={{ width: 200, height: 150, paddingBottom: 30 }} />
            </View>

            <View style={{paddingTop: 200}}>
                <Text style={[styles.textStyle]}>Kevin Moreira</Text>
                <Text style={[styles.textStyle]}>Sumaré - 07/02/2024</Text>
                <Text style={[styles.textStyle]}>Escola SENAI Celso Charuri</Text>
                <Text style={[styles.textStyle]}>Técnico em Desenvolvimento de Sistemas</Text>
                <Text style={[styles.textStyle]}>INDMO - Interface para Dispositivos Móveis</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-betwen',
        alignItems: 'center',
    },
    textStyle:{
        fontSize: 18, 
        fontWeight: 'bold',
        fontFamily:'monospace',
        padding: 10
    }
})
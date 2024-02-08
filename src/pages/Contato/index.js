import { View, Text, Button, StyleSheet, SafeAreaView, TextInput, Alert } from 'react-native';


export default function Contato() {

    return (
        <SafeAreaView style={[styles.container]}>
            <Text style={{fontFamily: 'monospace', fontSize: 24, fontWeight: 'bold'}}>Cadastro</Text> 
            <TextInput placeholder='Preencha seu nome' style={styles.input}></TextInput>         
            <TextInput placeholder='Preencha seu Email' style={styles.input}></TextInput>         
            <TextInput placeholder='Insira sua Senha' style={styles.input}></TextInput>
            
            <View style={[styles.botao]}>
                <Button  title='Enviar' color='black' onPress={() => Alert.alert('Seja bem vindo!')}></Button>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },
    input:{
        width:"80%",
        height: 40,
        backgroundColor: 'lightgray',
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderRadius:10,
        color: 'black',
        fontFamily: 'monospace',
        margin: 5,
        
    },
    botao:{
        marginTop: 30,
        width:'80%' ,
        height: 40,
        fontSize: 20
    }

})
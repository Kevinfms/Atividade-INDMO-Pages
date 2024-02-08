import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cursos() {


    
    return (
        <SafeAreaView style={[styles.container]}>
            <View style={{padding: 20}}>
                <Text style={[styles.textTitle]}>TÉCNICO EM ADMINISTRAÇÃO</Text>
                <Text style={[styles.textContent]}>O curso técnico de Administração tem por objetivo habilitar profissionais em realizar e gerir processos administrativos das áreas da indústria e de serviços, utilizando-se de técnicas e tecnologias apropriadas e de padrões éticos, legais, de qualidade e segurança, com responsabilidade social e ambiental.</Text>
            </View>
            <View style={{padding: 20}}>
                <Text style={[styles.textTitle]}>ASSISTENTE ADMINISTRATIVO</Text>
                <Text style={[styles.textContent]}>O Curso de Aprendizagem Industrial Assistente Administrativo tem por objetivo proporcionar qualificação profissional nas atividades de rotinas administrativas no ambiente de trabalho da empresa, seguindo legislação, normas internas e procedimentos técnicos, de qualidade, saúde, segurança e meio ambiente.</Text>
            </View>
            <View style={{padding: 20}}>
                <Text style={[styles.textTitle]}>MECÂNICO DE MANUTENÇÃO</Text>
                <Text style={[styles.textContent]}>O curso de Aprendizagem Industrial Mecânico de Manutenção tem por objetivo proporcionar qualificação profissional para realizar a manutenção mecânica de máquinas, equipamentos e instalações, tendo em vista o aumento da confiabilidade do processo produtivo, em conformidade às normas e procedimentos de saúde e segurança no trabalho, de meio ambiente e de qualidade.</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: 5,
    },
    textTitle:{
        fontFamily: 'monospace', 
        fontWeight: 'bold', 
        fontSize: 16, 
        backgroundColor: 'lightskyblue'
    },
    textContent:{
        fontFamily: 'monospace', 
        fontWeight: 500, 
        fontSize: 15,
        fontWeight: 800
    }
})
import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import TaskImage from './components/TaskImage';
import AnswerTask from './components/AnswerTask';
import * as Animatable from 'react-native-animatable';

export function HomeScreen() {
    const [imageUri, setImageUri] = useState(null);
    const [comment, setComment] = useState('');

    // const handleUpload = async (selectedFiles) => {
    //     const resultComment = await uploadFiles(selectedFiles, setImageUri);
    //     if (resultComment) {
    //         console.log('resultComment', resultComment);
    //         setComment(resultComment); // Atualiza o comentário
    //         console.log('Updated comment:', comment); // Log após setComment
    //     }
    // };


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="black" />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Animatable.View style={styles.containerHeader} animation="fadeInLeft" delay={1000}>
                    <Text style={styles.title}>Welcome!</Text>
                </Animatable.View>

                <Animatable.View style={styles.containerForm} animation="fadeInUp" delay={500}>
                    <View style={styles.subConteiner}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.subTitle}>Step 1 - Send archive .nii</Text>
                        </View>

                        {/* Passa a função handleUpload para TaskImage */}
                        <TaskImage setImageUri={setImageUri} setComment={setComment} />
                    </View>

                    <View style={styles.subConteiner}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.subTitle}>Step 2 - View result</Text>
                        </View>
                        {/* Exibe a imagem e o comentário resultante */}
                        <AnswerTask imageUri={imageUri} comment={comment} />
                    </View><View style={styles.subConteiner}>
                        <View style={{ paddingTop: '30 %' }}></View>
                    </View>
                </Animatable.View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5f9ea0',
    },

    items: {
        paddingTop: 20,
    },
    title: {
        color: "#FFF",
        fontSize: 28,
        fontWeight: "bold",
    },
    subConteiner: {
        borderStyle: 'solid',
        borderRadius: 30,
        width: '100%',           // Ocupa toda a largura disponível
        padding: 30,             // Espaçamento interno
        backgroundColor: '#f0f0f0', // Opcional: cor de fundo para visualização
        margin: 20,     // Margem nas laterais

    },
    subTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2b2a29',
    },
    containerForm: {
        flex: 1,
        flexDirection: 'column',  // Altera para 'column' para alinhar verticalmente
        alignItems: 'center',     // Centraliza horizontalmente os subconteineres
        justifyContent: 'flex-start', // Alinha no topo verticalmente
    },
    containerHeader: {
        flex: 1,
        flexDirection: 'column',
        paddingStart: '5%',
        paddingTop: '8%',
        alignItems: 'start',          // Centraliza horizontalmente
        justifyContent: 'center',  // Alinha no topo verticalmente
        backgroundColor: '#5f9ea0',
    },
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    footerText: {
        color: '#fff',
        fontSize: 12,
    },
});
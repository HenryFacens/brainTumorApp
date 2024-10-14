import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import TaskImage from './components/TaskImage';
import AnswerTask from './components/AnswerTask';
import * as Animatable from 'react-native-animatable';

export function HomeScreen() {
    // Estado para armazenar a URI da imagem
    const [imageUri, setImageUri] = useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#5f9ea0" />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Animatable.View style={styles.containerHeader}
                    animation={"fadeInLeft"}
                    delay={1000}>
                    <Text style={styles.title}>Welcome !</Text>
                </Animatable.View>
                <Animatable.View style={styles.containerForm}
                    animation="fadeInUp" delay={500}>
                    <View style={styles.subConteiner}>
                        <Text style={styles.subTitle}>Step 1 - Send archive .nii</Text>

                    </View>
                    <View style={styles.items}>
                        {/* Passa a função setImageUri para o TaskImage */}
                        <TaskImage setImageUri={setImageUri} />
                    </View>
                    <View style={styles.subConteiner}>
                        <Text style={styles.subTitle}>Step 2 - View result and diagnostic</Text>
                    </View>
                    <View style={styles.items}>
                        {/* Passa a imageUri para o AnswerTask */}
                        <AnswerTask imageUri={imageUri} />
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
    scrollContainer: {
        paddingVertical: 20,
        paddingBottom: '50%', // Para garantir espaço ao final da rolagem
    },
    listWrapper: {
        paddingTop: 50,
        paddingHorizontal: 20,
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
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#2b2a29',
        borderStyle: 'solid',
    },
    subTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2b2a29',
    },
    containerForm: {
        flex: 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingStart: '5%',
        paddingEnd: '5%',
        backgroundColor: '#f1f1f1',
        paddingBottom: 20, // Para permitir espaço extra quando for rolado
    },
    containerHeader: {
        marginTop: '14%',
        paddingStart: '5%',
        paddingBottom: '8%',
    },
});

import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, SafeAreaView } from 'react-native';
import TaskImage from './components/TaskImage';
import AnswerTask from './components/AnswerTask';
import * as Animatable from 'react-native-animatable';


export function HomeScreen() {
    const [imageUri, setImageUri] = useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#5f9ea0" />
            <Animatable.View style={styles.containerHeader}
                animation={"fadeInLeft"}
                delay={1000}>
                <Text style={styles.title}>Welcome !</Text>
            </Animatable.View>
            <Animatable.View style={styles.containerForm}
                animation="fadeInUp" delay={500}>
                <View style={styles.subConteiner}>
                    <Text style={styles.subTitle}>Step 1</Text>
                </View>
                <View style={styles.items}>
                    <TaskImage setImageUri={setImageUri} />
                </View>
                <View style={styles.subConteiner}>
                    <Text style={styles.subTitle}>Step 2</Text>
                </View>
                <View style={styles.items}>
                    <AnswerTask imageUri={imageUri} />
                </View>
            </Animatable.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5f9ea0',
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
        fontSize: 18,
        color: '#2b2a29',
    },
    containerForm: {
        flex: 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingStart: '5%',
        paddingEnd: '5%',
        backgroundColor: '#f1f1f1',
    },
    containerHeader: {
        marginTop: '14%',
        paddingStart: '5%',
        paddingBottom: '8%',
    },
});
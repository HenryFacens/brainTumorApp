import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import TaskImage from './components/TaskImage';
import AnswerTask from './components/AnswerTask';



export function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.listWrapper}>
                <Text style={styles.title}>Welcome !</Text>
                <View style={styles.subConteiner}>
                    <Text style={styles.subTitle}>Step 1</Text>
                </View>
                <View style={styles.items}>
                    <TaskImage text={1} />
                </View>
                <View style={styles.subConteiner}>
                    <Text style={styles.subTitle}>Step 2</Text>
                </View>
                <View style={styles.items}>
                    <AnswerTask text={1} />
                </View>
            </View>
        </View>
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
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    subConteiner: {
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subTitle: {
        fontSize: 18,
        color: 'white',
    },
});
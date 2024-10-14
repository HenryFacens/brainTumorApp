import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import * as Animatable from 'react-native-animatable';

import { AuthContext } from "../../contexts/auth";

export default function SignIn() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useContext(AuthContext);

    function handleSignIn() {
        // signIn(email, password);
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Animatable.View
                animation={"fadeInLeft"}
                delay={1000}
                style={styles.containerHeader}>
                <Text style={styles.title}>
                    Welcome to the Medicine
                </Text>
            </Animatable.View>
            <Animatable.View style={styles.containerForm}
                animation="fadeInUp"
                delay={500}>
                <Text style={styles.message}>E-mail</Text>
                <TextInput placeholder="E-mail" style={styles.input} value={email}
                    onChangeText={(text) => setEmail(text)} />
                <Text style={styles.message}>Password</Text>
                <TextInput placeholder="Password" style={styles.input}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)} />
                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5f9ea0",
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    title: {
        color: "#FFF",
        fontSize: 28,
        fontWeight: "bold",
    },
    containerForm: {
        flex: 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingStart: '5%',
        paddingEnd: '5%',
        backgroundColor: '#f1f1f1',
    },
    message: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        frontSize: 16,
    },
    button: {
        backgroundColor: "#5f9ea0",
        width: "100%",
        paddingVertical: 8,
        borderRadius: 4,
        marginTop: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
})
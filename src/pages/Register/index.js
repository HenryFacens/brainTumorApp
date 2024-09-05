import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import * as Animatable from 'react-native-animatable';

import { AuthContext } from "../../contexts/auth";

export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [crm, setCrm] = useState('');
    const { Register } = useContext(AuthContext);

    function handleRegister() {
        Register(email, password, crm, name);
    }

    return (
        <View style={styles.container}>
            <Animatable.View
                animation={"fadeInLeft"}
                delay={1000}
                style={styles.containerHeader}>
                <Text style={styles.title}>
                    Welcome to the BTSI
                </Text>
                <Animatable.View>
                    <Animatable.Image />
                </Animatable.View>

            </Animatable.View>
            <Animatable.View style={styles.containerForm}
                animation="fadeInUp"
                delay={500}>
                <Text style={styles.message}>Name</Text>
                <TextInput placeholder="Name" style={styles.input} value={name}
                    onChangeText={(text) => setName(text)} />
                <Text style={styles.message}>CRM</Text>
                <TextInput placeholder="CRM" style={styles.input} value={crm}
                    onChangeText={(text) => setCrm(text)} />
                <Text style={styles.message}>E-mail</Text>
                <TextInput placeholder="E-mail" style={styles.input} value={email}
                    onChangeText={(text) => setEmail(text)} />
                <Text style={styles.message}>Password</Text>
                <TextInput placeholder="Password" style={styles.input}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)} />
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Request</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#38A69D",
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
        backgroundColor: '#FFF',
    },
    message: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        color: "#2b2a29",
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        frontSize: 16,
    },
    button: {
        backgroundColor: "#38A69D",
        width: "100%",
        paddingVertical: 8,
        borderRadius: 4,
        marginTop: 14,
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
})
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, StatusBar } from "react-native";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const [content, setContent] = useState(null); // Estado para armazenar o conteúdo da API
    const [loading, setLoading] = useState(true); // Estado para controlar o loading

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#5f9ea0" />
            <Animatable.Image
                animation={{
                    from: {
                        opacity: 0,
                        translateY: 200,
                        rotateY: '0deg'
                    },
                    to: {
                        opacity: 1,
                        translateY: 0,
                        rotateY: '360deg'
                    }
                }}
                duration={1500}
                delay={500}
                source={require("../../assets/logo.png")}
            />

            <View style={styles.containerButtons}>
                {/* Botão de Sign In */}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>

                {/* Botão de Requisitar Login */}
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>Request Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5f9ea0",
        justifyContent: "center",
        alignItems: "center",
    },
    containerButtons: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
        width: '100%',
    },
    button: {
        backgroundColor: "#fff",
        borderRadius: 50,
        paddingVertical: 12,
        width: '60%',
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        fontSize: 18,
        color: "#2b2a29",
        fontWeight: "bold",
    },
    priceContainer: {
        marginVertical: 20,
        alignItems: "center",
    },
    priceText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
    },
    priceValue: {
        fontSize: 20,
        color: "#fff",
    },
    loadingText: {
        fontSize: 18,
        color: "#fff",
    },
});


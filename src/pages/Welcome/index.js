import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';


import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View >
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
            </View>

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

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#38A69D",
        justifyContent: "center",
        alignItems: "center",
    },
    containerButtons: {
        flex: 1,
        justifyContent: "center", // Centraliza os botões verticalmente
        alignItems: "center",      // Centraliza os botões horizontalmente
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
        marginVertical: 10,  // Espaçamento entre os botões
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
    logo: {
        width: '80%',
        height: '80%',
        resizeMode: "contain",
    },
});

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC5DLML7Qspl5nt-YIcqbixTyc8gWBF7AI",
    authDomain: "braintumor-d8157.firebaseapp.com",
    projectId: "braintumor-d8157",
    storageBucket: "braintumor-d8157.appspot.com",
    messagingSenderId: "901967792227",
    appId: "1:901967792227:web:ff9eefde2e31ad701f9056",
    measurementId: "G-T15F4038ZG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export default function Register({ setCrm, setName, email, setEmail, password, setPassword, crm, name }) {

    const handleAuth = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // Store the additional information in Firestore
                setDoc(doc(firestore, 'users', user.uid), {
                    name: name,
                    crm: crm,
                    email: email
                })
                    .then(() => {
                        console.log('User registered and data saved successfully.');
                    })
                    .catch((error) => {
                        console.error('Error saving user data: ', error);
                    });

            })
            .catch((error) => {
                console.error('Error registering user: ', error);
            });
    };

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
                    onChangeText={setName} />
                <Text style={styles.message}>CRM</Text>
                <TextInput placeholder="CRM" style={styles.input} value={crm}
                    onChangeText={setCrm} />
                <Text style={styles.message}>E-mail</Text>
                <TextInput placeholder="E-mail" style={styles.input} value={email}
                    onChangeText={setEmail} />
                <Text style={styles.message}>Password</Text>
                <TextInput placeholder="Password" style={styles.input}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={setPassword} />
                <TouchableOpacity style={styles.button} onPress={handleAuth}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View >
    );
}


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
        backgroundColor: "#5f9ea0",
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
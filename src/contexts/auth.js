import React, { createContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { db, auth } from './fireStore';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState(null);
    const navigation = useNavigation();

    async function signIn(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setEmail(user.email);
            navigation.navigate('Home');
        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
    }

    async function Register(email, password, crm, name) {
        if (email !== '' && password !== '' && crm !== '' && name !== '') {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                console.log("Usuário criado no Firebase Authentication: ", user.uid);

                const newUser = {
                    email: email,
                    crm: crm,
                    name: name,
                    status: "active",
                    createAt: new Date().toISOString(),
                    authId: user.uid
                };

                const docRef = await addDoc(collection(db, 'users'), newUser);
                console.log("Usuário registrado com ID: ", docRef.id);

                setUsers([...users, { ...newUser, id: docRef.id }]);

                setEmail(newUser.email);
                navigation.navigate('SignIn');
            } catch (error) {
                console.error("Erro ao registrar usuário no Firebase Authentication: ", error);
            }
        } else {
            console.error("Por favor, preencha todos os campos.");
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, Register, email }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

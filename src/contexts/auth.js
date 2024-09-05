import React, { createContext, useState } from "react";

export const AuthContext = createContext({});
import { useNavigation } from "@react-navigation/native";

function AuthProvider({ children }) {
    const navigation = useNavigation();
    const [email, setEmail] = useState({});

    function signIn(email, password) {
        if (email !== '' && password !== '') {
            setEmail({
                email: email,
                password: password,
                status: "active",
            });

            navigation.navigate('Home');
        }
        return;
    }

    function Register(email, password, crm, name) {
        if (email !== '' && password !== '' && crm !== '') {
            setEmail({
                email: email,
                password: password,
                crm: crm,
                name: name,
                status: "active",
            });

            navigation.navigate('SignIn');
        }
        return;
    }


    return (
        <AuthContext.Provider value={{ signIn, Register }}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthProvider;
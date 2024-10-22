import * as React from 'react';
import { View, Text, StyleSheet, Image, Touchable, TouchableOpacity } from 'react-native';
import { SafeAreaView, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Entypo from '@expo/vector-icons/Entypo';

export function UserScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#5f9ea0" />
            <Animatable.View style={styles.containerHeader}
                animation={"fadeInLeft"}
                delay={1000}>
            </Animatable.View>

            <Animatable.View style={styles.containerForm}
                animation="fadeInUp" delay={500}>

                <Animatable.View animation={"fadeInLeft"} delay={1000} >
                    <Image source={require("../../../assets/profile.png")}
                        resizeMode="contain"
                        style={styles.ImageSize}
                    />
                </Animatable.View>
                <Text
                    style={styles.title}
                > Chuchuca do PCC</Text>
                <Text style={styles.subTitle}>
                    Medico
                </Text>
                <View style={{
                    flexDirection: 'row',
                    mariginVertical: 6,
                    alignItems: 'center',
                }}></View>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Entypo name="location-pin" size={24} color="black" />

                    <Text style={styles.subTitle}>
                        São Paulo, SP
                    </Text>
                </View>


                <View style={{ paddingVertical: 8, flexDirection: "row" }}>
                    <View style={{
                        flexDirection: "column",
                        alignItems: "center",
                        marginHorizontal: 20,
                    }}>
                        {/* <Text style={{ fontSize: 24, color: '#2b2a29' }}> 12 </Text>
                        <Text>Seguidores</Text> */}
                    </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity style={{
                        width: 124,
                        height: 36,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#2b2a29',
                        borderRadius: 10,
                        marginHorizontal: 10,
                    }}>
                        <Text style={{ color: '#f1f1f1' }}>Editar profile</Text>


                    </TouchableOpacity>
                </View>

            </Animatable.View>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5f9ea0',
    },
    statusbar: {
        marginTop: 50,
    },
    listWrapper: {
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    items: {
        paddingTop: 20,
    },
    title: {
        color: "#2b2a29",
        fontSize: 28,
        fontWeight: "bold",
        marginVertical: 8,
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
        alignItems: 'center',
    },
    containerHeader: {
        marginTop: '14%',
        paddingStart: '5%',
        paddingBottom: '8%',
    },
    ImageSize: {
        height: 155,
        width: 155,
        borderRadius: 999,
        borderColor: '#2b2a29',
        borderWidth: 2,
        marginTop: -90,
        backgroundColor: 'white',
    },
});

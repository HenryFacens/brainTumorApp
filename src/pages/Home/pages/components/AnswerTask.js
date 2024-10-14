import React, { useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const AnswerTask = ({ imageUri }) => {
    return (
        <View styles={styles.item}>
            {imageUri ? (
                <Image
                    source={{ uri: imageUri }}
                    style={{ width: 300, height: 300, marginTop: 20 }}
                />
            ) : (
                <Text>Nenhuma imagem enviada ainda.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    imageTask: {
        flexDirection: 'column',
        alignItems: 'center', // Centraliza o conteúdo na vertical
        justifyContent: 'center', // Centraliza o conteúdo na horizontal
    },
    uploadButton: {
        backgroundColor: '#5f9ea0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    uploadButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 10,
        borderRadius: 10,
    },
});

export default AnswerTask;
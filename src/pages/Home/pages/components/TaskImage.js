import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';

const TaskImage = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.uri);
        }
    };

    return (
        <View style={styles.item}>
            {props.text === 1 ? (
                <View style={styles.imageTask}>
                    <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
                        <Text style={styles.uploadButtonText}>Upload Image</Text>
                    </TouchableOpacity>
                    {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
                </View>
            ) : (
                <Text style={styles.itemLeft}>{props.text}</Text>
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
        justifyContent: 'center', // Centraliza o conteúdo horizontalmente
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

export default TaskImage;

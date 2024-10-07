import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert, Linking } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker'; // Certifique-se de importar o DocumentPicker
import { Feather } from '@expo/vector-icons'; // Certifique-se de ter @expo/vector-icons instalado

const TaskImage = (props) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    // Solicitar permissão para usar a câmera
    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestCameraPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permissão necessária', 'Precisamos de permissão para acessar sua câmera.');
            }
        })();
    }, []);

    const pickDocument = async () => {
        try {
            let result = await DocumentPicker.getDocumentAsync({
                type: 'application/pdf',
                copyToCacheDirectory: true,
            });

            console.log('Resultado do DocumentPicker:', result); // Verifica o resultado completo

            if (result.canceled === false && result.assets && result.assets.length > 0) {
                const selectedAsset = result.assets[0]; // Acessa o primeiro arquivo selecionado
                setSelectedFile({ uri: selectedAsset.uri, name: selectedAsset.name }); // Salva o URI e o nome do arquivo
                setSelectedImage(null); // Limpa a imagem se um PDF for selecionado
                console.log('PDF selecionado:', selectedAsset.uri);
            } else {
                console.log('Nenhum arquivo selecionado');
                Alert.alert('Erro', 'Nenhum arquivo foi selecionado');
            }
        } catch (error) {
            console.log('Erro ao selecionar PDF:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao selecionar o PDF.');
        }
    };

    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri); // URI da imagem capturada
            setSelectedFile(null); // Limpa o arquivo PDF se uma imagem for selecionada
        }
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri); // URI da imagem selecionada
            setSelectedFile(null); // Limpa o arquivo PDF se uma imagem for selecionada
        }
    };

    const openPdf = () => {
        if (selectedFile && selectedFile.uri) {
            Linking.openURL(selectedFile.uri).catch((err) => Alert.alert('Erro ao abrir o PDF:', err));
        } else {
            Alert.alert('Nenhum arquivo PDF selecionado');
        }
    };

    return (
        <View style={styles.item}>
            {props.text === 1 ? (
                <View>
                    <View style={styles.imageTask}>
                        <TouchableOpacity style={styles.uploadButton} onPress={takePhoto}>
                            <Feather name="camera" size={24} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.uploadButton} onPress={pickDocument}>
                            <Text style={styles.uploadButtonText}>Upload Document</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
                            <Feather name="image" size={24} color="#fff" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imageRow}>
                        {selectedImage && (
                            <View style={styles.imageRow}>
                                <Image source={{ uri: selectedImage }} style={styles.image} />
                            </View>
                        )}

                        {selectedFile && (
                            <View style={styles.fileContainer}>
                                <Text style={styles.fileText}> PDF selecionado: {selectedFile.name}</Text>
                                <TouchableOpacity style={styles.openButton} onPress={openPdf}>
                                    <Text style={styles.openButtonText}>Abrir PDF</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
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
        flexDirection: 'row',
        alignItems: 'center', // Centraliza o conteúdo horizontalmente
        justifyContent: 'center',
    },
    uploadButton: {
        backgroundColor: '#5f9ea0',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginHorizontal: 5,
    },
    uploadButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    image: {
        width: '80%', // Ajuste para ocupar 80% da largura disponível
        height: undefined, // Deixe a altura indefinida para preservar a proporção
        aspectRatio: 1, // Mantém a proporção da imagem
        borderRadius: 10,
    },
    fileContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    fileText: {
        fontSize: 16,
        color: '#333',
    },
    openButton: {
        backgroundColor: '#5f9ea0',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 10,
    },
    openButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default TaskImage;

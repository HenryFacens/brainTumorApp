import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert, Linking, Image, StyleSheet } from 'react-native';
import pickDocuments from '../../../../contexts/pickDocuments';
import uploadFiles from '../../../../contexts/uploadFiles';

export default function TaskImage({ setImageUri }) {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleUploadFiles = async () => {
        if (selectedFiles.length === 0) {
            Alert.alert('Erro', 'Nenhum arquivo selecionado para upload.');
            return;
        }
        await uploadFiles(selectedFiles, setImageUri);
    };

    return (
        <View styles={styles.item}>
            <View style={styles.imageTask}>
                <TouchableOpacity
                    style={styles.uploadButton}
                    onPress={async () => {
                        const files = await pickDocuments();
                        if (files) {
                            setSelectedFiles(files);
                        }
                    }}
                >
                    <Text style={styles.uploadButtonText}>Upload</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.uploadButton} onPress={handleUploadFiles}>
                    <Text style={styles.uploadButtonText}>Enviar</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.fileList}>
                {selectedFiles.map((file, index) => (
                    <View key={index} style={styles.fileContainer}>
                        <Text style={styles.fileText}>Arquivo: {file.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}


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

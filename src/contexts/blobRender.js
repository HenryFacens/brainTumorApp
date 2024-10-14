import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default function BlobRender({ blob }) {
    const [imageUri, setImageUri] = useState(null);

    useEffect(() => {
        if (blob) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUri(reader.result);  // Define a URI da imagem
            };
            reader.readAsDataURL(blob);
        }
    }, [blob]);

    return (
        <View style={styles.item}>
            {imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.image} />
            ) : (
                <View>
                    <Text>Carregando imagem...</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
});
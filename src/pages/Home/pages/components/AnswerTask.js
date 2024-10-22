import React, { useState } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const AnswerTask = ({ imageUri, comment }) => {
    console.log('comment Answer', comment);
    return (
        <View >
            {imageUri ? (
                <Image
                    source={{ uri: imageUri }}
                    style={styles.image}
                />
            ) : (
                <Text style={styles.placeholderText}></Text>
            )}
            {comment && (
                <View style={styles.TextView}>
                    <Text style={styles.commentText}>Comentário: {comment}</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    TextView: { flex: 1, marginTop: 10, backgroundColor: '#5f9ea0', padding: 10, borderRadius: 10 },
    commentText: { fontSize: 16, color: 'white', },
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
    image: {
        width: 300,
        height: 300,
        marginTop: 20,
        borderRadius: 10,
        resizeMode: 'contain',
    },
});

export default AnswerTask;
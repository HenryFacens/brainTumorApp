import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';

export function ExploreScreen() {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar barStyle="light-content" backgroundColor="#5f9ea0" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});
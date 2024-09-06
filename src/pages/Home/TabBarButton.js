import { Pressable, StyleSheet, Text } from 'react-native'
import React, { useEffect } from 'react'
import { icon } from './constantIcons';
import { Feather } from '@expo/vector-icons';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const TabBarButton = ({ onPress, onLongPress, isFocused, routeName, color, label }) => {
    const IconComponent = icon[routeName] || (() => <Feather name='alert-circle' size={24} color={isFocused ? '#5f9ea0' : '#222'} />);
    const scale = useSharedValue(0);

    useEffect(
        () => {
            scale.value = withSpring(typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused, { duration: 350 });
        }, [scale, isFocused]
    );

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
        const top = interpolate(scale.value, [0, 1], [0, 9]);
        return {
            transform: [{
                scale: scaleValue

            }],
            top: top,
        };
    }
    );

    const animatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0, 1], [1, 0]);

        return {
            opacity
        }
    });

    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabbarButton}
        >
            <Animated.View style={animatedIconStyle}>
                <IconComponent color={isFocused ? '#5f9ea0' : '#222'} />
            </Animated.View>
            <Animated.Text style={[{ color: isFocused ? '#5f9ea0' : '#222', fontSize: 12 }, animatedTextStyle]}>
                {label}
            </Animated.Text>
        </Pressable>
    );
}

export default TabBarButton;

const styles = StyleSheet.create({
    tabbarButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    }
});

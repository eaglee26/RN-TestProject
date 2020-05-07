import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Button = memo(() => {
    return (
        <TouchableOpacity onPress={() => console.log('lol')} style={styleButton.container}>
            <Text>Далее</Text>
        </TouchableOpacity>
    )
});

const styleButton = StyleSheet.create({
    container: {
        backgroundColor: '#BBFF00',
        borderRadius: 40,
        alignItems: 'center',
        width: '70%',
        paddingTop: 18,
        paddingBottom: 18,
    },
    text: {
        color: '#272727',
        fontSize: 16,
        fontWeight: 'bold',
    }
})
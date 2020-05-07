import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Button = memo(({checkOpacity, onPress, checkActive, children}) => {
    return (
        <TouchableOpacity activeOpacity={checkOpacity} onPress={onPress} style={styleButton.button}>
            <Text style={checkActive}>{children}</Text>
        </TouchableOpacity>
    )
});

const styleButton = StyleSheet.create({
    button: {
        backgroundColor: '#BBFF00',
        borderRadius: 40,
        alignItems: 'center',
        width: '70%',
        paddingTop: 18,
        paddingBottom: 18,
    },
})
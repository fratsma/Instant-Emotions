import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colours from '../config/colours';



function AppButton({title, onPress, color = "danger"}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colours[color]}]} onPress={onPress}>
            
            <Text style={styles.text}>{title}</Text>
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colours.danger,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '70%',
        marginVertical: 10
    },

    text:{
        color: colours.white,
        fontSize: 25,
        // textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})


export default AppButton;
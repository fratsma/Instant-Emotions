import React, {Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colours from '../config/colours';



function AppButton({title, onPress, color = "lightblue"}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colours[color]}]} onPress={onPress}>
            
            <Text style={styles.text}>{title}</Text>
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: colours.lightblue,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: '50%',
        marginVertical: 10
    },

    text:{
        color: colours.white,
        fontSize: 17,
        // textTransform: 'uppercase',
        fontFamily: 'Avenir-Black',
        fontWeight: 'bold',
    }
})


export default AppButton;
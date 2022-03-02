import React from 'react';
import Screen from '../components/Screen';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight } from 'react-native';
import colours from '../config/colours';

function Analytics(props) {
    return (
        <Screen>
            <Text style={styles.mainText}>
                Instant Emotions
            </Text>
        </Screen>
    );
}


const styles = StyleSheet.create({
    mainText:{
        fontSize: 40, 
        paddingTop: 10,
        fontWeight: 'bold', 
        textAlign: 'center',
        color: colours.danger,
        // fontFamily: 'Arial-BoldMT'
        // fontFamily: 'Helvetica Neue'
        fontFamily: 'Kohinoor Bangla'
        
    },
})

export default Analytics;
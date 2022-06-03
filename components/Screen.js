import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Platform, StatusBar, View } from 'react-native';
import colours from '../config/colours';


function Screen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={style}>
                {children}  
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen:{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
    }
})

export default Screen;
import React,  { Suspense, useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight, ActivityIndicator, FlatList } from 'react-native';
import { getDatabase, ref, onValue, set} from "firebase/database";
import Moment from 'moment';
import {getImage} from '../config/images';
import colours from '../config/colours';
import DropShadow from "react-native-drop-shadow";
// import { FlatList } from 'react-native-gesture-handler';


Moment.suppressDeprecationWarnings = true;


function DailyView(props) {
    // console.log("View:")
    let data = props.props
    // console.log(data)



    return (

        <DropShadow style={styles.container}>
            <View style={styles.viewStyle}>
                    <Image style={styles.emotions} source={getImage(data.feeling)}/>

                    <View style={styles.ViewReasons}>
                        <Text style={styles.emotionText}>{data.feeling}</Text>
                        <Text style={styles.emotionSub}>Reason: {data.reason}</Text>
                        <Text style={styles.emotionSub}>Mood: {data.mood}</Text>
                        <Text style={styles.emotionSub}>{Moment(data.time).format('D MMM YYYY - h:mma ')}</Text>
                    </View>
            </View>
        </DropShadow>

        
    

    );
}


const styles = StyleSheet.create({

    emotionText:{
        fontFamily: 'Arial Rounded MT Bold',
        fontSize: 20,
        justifyContent: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'capitalize', 
        
    },

    ViewReasons:{
        paddingLeft: 40,
        alignContent: 'center',
        alignItems: 'center',
        width: '60%',
        marginBottom: 20,
        
        
        
        
    },

    emotionSub:{
        fontFamily: 'Arial Rounded MT Bold',
        fontSize: 13,
        justifyContent: 'center',
        flex: 1

        
    },

    viewStyle:{
        flexDirection: 'row',
        height: 120,
        justifyContent: 'center',
        // paddingLeft: 40,
        paddingTop: 10,
        marginBottom: 10,
        

        borderColor: "#e6e6e6",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: colours.white,
        

        

    },

    

    emotions:{
        width: 80,
        height: 80
        
    },

    container:{
        shadowColor: colours.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 1,
    }




})




export default DailyView;
import React,  { Suspense, useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight, ActivityIndicator } from 'react-native';
import { getDatabase, ref, onValue, set} from "firebase/database";
import Moment from 'moment';
import {getImage} from '../config/images'



function DailyView({itemImage, itemEmotion, itemReason, itemMood, itemTime}) {

    



    return (

            <View style={styles.viewStyle}>
                    <Image style={styles.emotions} source={itemImage}/>
                    <View style={styles.ViewReasons}>
                        <Text style={styles.emotionText}>{itemEmotion}</Text>
                        <Text style={styles.emotionSub}>Reason: {itemReason}</Text>
                        <Text style={styles.emotionSub}>Mood: {itemMood}</Text>
                        <Text style={styles.emotionSub}>{itemTime}</Text>
                    </View>
            </View>
    

    );
}


const styles = StyleSheet.create({

    emotionText:{
        fontFamily: 'Avenir-Black',
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
        width: '60%'
        
        
    },

    emotionSub:{
        fontFamily: 'Avenir-Black',
        fontSize: 15,
        justifyContent: 'center',
        flex: 1

        
    },

    viewStyle:{
        flexDirection: 'row',
        height: 120,
        justifyContent: 'center',
        // paddingLeft: 40,
        paddingTop: 10,

    },

    

    emotions:{
        width: 80,
        height: 80
    },
})

        // <View style={styles.viewStyle}>
        //         <Image style={styles.emotions} source={itemImage}/>
        //         <View style={styles.ViewReasons}>
        //             <Text style={styles.emotionText}>{itemEmotion}</Text>
        //             <Text style={styles.emotionSub}>Reason: {itemReason}</Text>
        //             <Text style={styles.emotionSub}>Mood: {itemMood}</Text>
        //             <Text style={styles.emotionSub}>{itemTime}</Text>
        //         </View>
        // </View>

            //     // item2Emotion = Object.values(data)[numEntries-2]["entry"]["feeling"]
    //     // item2Reason = Object.values(data)[numEntries-2]["entry"]["reason"]
    //     // item2Mood = Object.values(data)[numEntries-2]["entry"]["mood"]
    //     // item2Time = Object.values(data)[numEntries-2]["entry"]["time"]

    //     // item2Time = Moment(item2Time).format('D MMM YYYY - h:mma ')
    //     // item2Image = getImage(item2Emotion)


export default DailyView;
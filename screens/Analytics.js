import React, { useState, useEffect, Component, Suspense } from 'react';
import Screen from '../components/Screen';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight, ActivityIndicator } from 'react-native';
import { getDatabase, ref, onValue, update, get, child} from "firebase/database";
import colours from '../config/colours';
import App from '../App';
import Moment from 'moment';
import {getImage} from '../config/images'
import DailyView from '../components/DailyView';
import { render } from 'react-dom';
import { databaseEmotions } from '../config/emotions';
import EmotionsTry2 from '../config/EmotionsTry2';
import Formiktest from './Formiktest';
import AppButton from '../components/AppButton';




function Analytics(props) {



    const db = getDatabase();
    const emotionsRef = ref(db, 'users/' + global.uid);
    onValue(emotionsRef, (snapshot)=>{
        const data = snapshot.val();
        const numEntries = Object.keys(data).length
        console.log(numEntries)
        console.log(data)


        console.log(Object.values(data)[0]["entry"]["reason"])
        global.item1Emotion = Object.values(data)[numEntries-1]["entry"]["feeling"]
        global.item1Reason = Object.values(data)[numEntries-1]["entry"]["reason"]
        global.item1Mood = Object.values(data)[numEntries-1]["entry"]["mood"]
        global.item1Time = Object.values(data)[numEntries-1]["entry"]["time"]
        global.item1Time = Moment(global.item1Time).format('D MMM YYYY - h:mma ')
        global.item1Image = getImage(global.item1Emotion)

        global.item2Emotion = Object.values(data)[numEntries-2]["entry"]["feeling"]
        global.item2Reason = Object.values(data)[numEntries-2]["entry"]["reason"]
        global.item2Mood = Object.values(data)[numEntries-2]["entry"]["mood"]
        global.item2Time = Object.values(data)[numEntries-2]["entry"]["time"]
        global.item2Time = Moment(global.item2Time).format('D MMM YYYY - h:mma ')
        global.item2Image = getImage(global.item2Emotion)

    })


    return (
        <Screen style={styles.background}>
            <Text style={styles.mainText}>
                Instant Emotions
            </Text>
            {/* <Button title='heek' onPress={getData}/> */}


            <ScrollView>

                
            <DailyView itemImage={global.item1Image} 
            itemEmotion={global.item1Emotion}
            itemTime={global.item1Time}
            itemMood={global.item1Mood}
            itemReason={global.item1Reason}/>

            {/* <DailyView itemImage={global.item1Image} 
            itemEmotion={global.item1Emotion}
            itemTime={global.item1Time}
            itemMood={global.item1Mood}
            itemReason={global.item1Reason}/> */}

            <DailyView itemImage={global.item2Image} 
            itemEmotion={global.item2Emotion}
            itemTime={global.item2Time}
            itemMood={global.item2Mood}
            itemReason={global.item2Reason}/>

            {/* <DailyView itemImage={global.item3Image} 
            itemEmotion={global.item3Emotion}
            itemTime={global.item3Time}
            itemMood={global.item3Mood}
            itemReason={global.item3Reason}/> */}




    </ScrollView>


    {/* <AppButton type="submit" onPress={()=>setUpdate((prevState)=> !prevState)} title="tester"/> */}

        

            


        </Screen>
        
    );
}


const styles = StyleSheet.create({

    background:{
        backgroundColor: colours.background,
        flex: 1,
        paddingBottom: 20
    },

    
    mainText:{
        fontSize: 40, 
        paddingTop: 10,
        fontWeight: 'bold', 
        textAlign: 'center',
        color: colours.danger,
        // fontFamily: 'Arial-BoldMT'
        // fontFamily: 'Helvetica Neue'
        fontFamily: 'Kohinoor Bangla',
    },

    emotionText:{
        fontFamily: 'Kohinoor Bangla',
        fontSize: 20,
        justifyContent: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'capitalize', 
        width: '40%'
    },

    ViewReasons:{
        paddingLeft: 40,
        alignContent: 'center',
        alignItems: 'center',
        width: '60%'
        
        
    },

    emotionSub:{
        fontFamily: 'Kohinoor Bangla',
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

export default Analytics;
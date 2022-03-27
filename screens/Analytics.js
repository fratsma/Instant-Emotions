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


    const [setEmotion, Emotion] = useState();
    const [value, setValue] = useState(0);
    const [update, setUpdate] = useState(false);
    
    // return () => setValue(value => value + 1);

    useEffect(()=> {
        console.log("RERENDER")
    }, [update]);


    useEffect(() => {
        let didCancel = false;

        async function fetchData(){
            if (!didCancel){
                let response = await fetch(Analytics)
                console.log("FETCHING")
                console.log(response)
                let data = await response
                setEmotion(data)
                
            }
        }

        fetchData();

        return() => {
            didCancel = true;
        }
    }, [update])




    const dbRef = ref(getDatabase());
    // get(child(dbRef, getEmotions)).then((snapshot)=>{
    get(child(dbRef, `users/${global.uid}`)).then((snapshot) => {
        if(snapshot.exists()){
            var data = snapshot.val();
            console.log(data);
            const numEntries = Object.keys(data).length
            console.log(numEntries)


            console.log(Object.values(data)[0]["entry"]["reason"])
            global.item1Emotion = Object.values(data)[numEntries-1]["entry"]["feeling"]
            global.item1Reason = Object.values(data)[numEntries-1]["entry"]["reason"]
            global.item1Mood = Object.values(data)[numEntries-1]["entry"]["mood"]
            global.item1Time = Object.values(data)[numEntries-1]["entry"]["time"]
            global.item1Time = Moment(global.item1Time).format('D MMM YYYY - h:mma ')
            global.item1Image = getImage(global.item1Emotion)


        } else {
            console.log("No data available")
        }
    }).catch((error) =>{
        console.log(error)
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




    </ScrollView>


    <AppButton type="submit" onPress={()=>setUpdate((prevState)=> !prevState)} title="tester"/>

        

            


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
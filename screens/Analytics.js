import React, { useState, useEffect, Component, Suspense } from 'react';
import Screen from '../components/Screen';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight, ActivityIndicator } from 'react-native';
import { getDatabase, ref, onValue, update} from "firebase/database";
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

// import emotionstry2 from '../config/emotionstry2';
// function getData(props){
//     const db = getDatabase();
//     const getEmotions = ref(db, 'users/' + global.uid);
//     onValue(getEmotions, (snapshot)=>{
//         var data = snapshot.val();



//         for (const value of Object.values(data)) {
//             console.log(value["entry"]["feeling"])
//           }

//         console.log(Object.values(data)[0]["entry"]["reason"])
//     })
// }

// function forceUpdate(){
//     const [setEmotion, Emotion] = useState();
//     const [value, setValue] = useState(0);
//     const [update, setUpdate] = useState(false);
    
//     return () => setValue(value => value + 1);

    
// }

//     useEffect(() => {
//         let didCancel = false;

//         async function fetchData(){
//             if (!didCancel){
//                 let response = await fetch(Analytics)
//                 let data = await response
//                 setEmotion(data)
                
//             }
//         }

//         fetchData();

//         return() => {
//             didCancel = true;
//         }
//     }, [update])



// function getMe(){



// })

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
                let data = await response
                setEmotion(data)
                
            }
        }

        fetchData();

        return() => {
            didCancel = true;
        }
    }, [update])

    // const DailyView = React.lazy(() => import('../components/DailyView')); // Lazy-loaded

    // const forceMe = forceUpdate()
    


    const db = getDatabase();
    const getEmotions = ref(db, 'users/' + global.uid);
    onValue(getEmotions, (snapshot)=>{
        var data = snapshot.val();

        for (const value of Object.values(data)) {
            console.log(value["entry"]["feeling"])
          }

        const numEntries = Object.keys(data).length
        console.log(numEntries)

        console.log(Object.values(data)[0]["entry"]["reason"])
        global.item1Emotion = Object.values(data)[numEntries-1]["entry"]["feeling"]
        global.item1Reason = Object.values(data)[numEntries-1]["entry"]["reason"]
        global.item1Mood = Object.values(data)[numEntries-1]["entry"]["mood"]
        global.item1Time = Object.values(data)[numEntries-1]["entry"]["time"]
        global.item1Time = Moment(global.item1Time).format('D MMM YYYY - h:mma ')
        global.item1Image = getImage(global.item1Emotion)



        // global.item2Emotion = Object.values(data)[numEntries-2]["entry"]["feeling"]
        // global.item2Reason = Object.values(data)[numEntries-2]["entry"]["reason"]
        // global.item2Mood = Object.values(data)[numEntries-2]["entry"]["mood"]
        // global.item2Time = Object.values(data)[numEntries-2]["entry"]["time"]

        // global.item2Time = Moment(item2Time).format('D MMM YYYY - h:mma ')
        // global.item2Image = getImage(item2Emotion)

        // console.log("SUIIIIIII" + getImage("happy"))

        // console.log("YOOOOOOOOOO" + databaseEmotions("item1Emotion"))

        // console.log(databaseEmotions(item1Emotion))




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


            {/* // itemEmotion={databaseEmotions('item1Emotion')}
            // itemMood={databaseEmotions('item1Mood')}
            // itemTime={databaseEmotions('item1Time')}
            // itemReason={databaseEmotions('item1Reason')}
            // itemImage={databaseEmotions('item1Image')}

            // itemEmotion={global.item1Emotion}
            // itemMood={global.item1Mood}
            // itemTime={global.item1Time}
            // itemReason={global.item1Reason}
            // itemImage={global.item1Image} */}

        {/* <DailyView 
            itemEmotion={emotionstry2.item0Emotion}
            itemMood={emotionstry2.item0Mood}
            itemTime={emotionstry2.item0Time}
            itemReason={emotionstry2.item0Reason}
            itemImage={emotionstry2.item0Image}
        /> */}


        {/* <DailyView 
            itemEmotion={databaseEmotions(item1Emotion)}
            itemMood={databaseEmotions(item1Mood)}
            itemTime={databaseEmotions(item1Time)}
            itemReason={databaseEmotions(item1Reason)}
            itemImage={databaseEmotions(item1Image)}
        /> */}

        {/* <DailyView 
            itemEmotion={global.item2Emotion}
            itemMood={global.item2Mood}
            itemTime={global.item2Time}
            itemReason={global.item2Reason}
            itemImage={global.item2Image}
        /> */}


    </ScrollView>

    {/* <AppButton type="submit" onPress={forceMe} title="submit"/> */}

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
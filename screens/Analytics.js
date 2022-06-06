import React, { useState, useEffect, Component, Suspense } from 'react';
import Screen from '../components/Screen';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight, ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import { getDatabase, ref, onValue, update, get, child} from "firebase/database";
import colours from '../config/colours';
import App from '../App';
import Moment from 'moment';
import {getImage} from '../config/images'
import DailyView2 from '../components/DailyView2';
import { render } from 'react-dom';
import { databaseEmotions } from '../config/emotions';
import EmotionsTry2 from '../config/EmotionsTry2';
import Formiktest from './Formiktest';
import AppButton from '../components/AppButton';




function Analytics(props) {

    
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        const db = getDatabase();
        const emotionsRef = ref(db, 'users/' + global.uid);
        // console.log(emotionsRef)
    
        get(emotionsRef).then((snapshot) => {
        if (snapshot.exists()) {
            // console.log("log")
            // console.log(snapshot.val());
            // console.log(Object.values(snapshot.val())[0]["entry"]["feeling"])
            let e = Object.values(snapshot.val()).map(x => {return x["entry"]})
            e.reverse()
            e = e.slice(0,50)

            setEmotions(e)
            // console.log("emotions: ",emotions)
            setRefreshing(false)
        } else {
            setRefreshing(false)
            // console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
        setRefreshing(false)
    });
        // wait(200).then(() => setRefreshing(false));
    }, []);


    const [emotions, setEmotions] = useState([])
    

    React.useEffect(() => {
        const db = getDatabase();
        const emotionsRef = ref(db, 'users/' + global.uid);
        // console.log(emotionsRef)
    
        get(emotionsRef).then((snapshot) => {
        if (snapshot.exists()) {
            // console.log("log")
            // console.log(snapshot.val());
            // console.log(Object.values(snapshot.val())[0]["entry"]["feeling"])
            let e = Object.values(snapshot.val()).map(x => {return x["entry"]})
            e.reverse()
            e = e.slice(0,50)
            setEmotions(e)
            // console.log("emotions: ",emotions)
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
        console.error(error);
    });
    }, []
    )
    

    return (
        <Screen style={styles.background}>
            <Text style={styles.mainText4}>
                Instant Emotions
            </Text>
            {/* <Button title='heek' onPress={getData}/> */}
            
            <View style={styles.whiteBackground}>

            <ScrollView
                style={styles.marginT}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                
            <View style={styles.container}>
                <View>
                    {emotions.map(x => {
                        return <DailyView2 key={x.time} props={x}/>
                    })}

                </View> 
            </View>
            
            </ScrollView>

            </View>


                {/* // <DailyView2 props={emotions[0]}/> */}
            {/* <DailyView itemImage={undefined}  
            itemEmotion={emotions[0]["feeling"]}
            itemTime={global.item1Time}
            itemMood={global.item1Mood}
            itemReason={global.item1Reason}/> */}

            {/* <DailyView itemImage={global.item1Image} 
            itemEmotion={global.item1Emotion}
            itemTime={global.item1Time}
            itemMood={global.item1Mood}
            itemReason={global.item1Reason}/> */}


            {/* <DailyView itemImage={global.item3Image} 
            itemEmotion={global.item3Emotion}
            itemTime={global.item3Time}
            itemMood={global.item3Mood}
            itemReason={global.item3Reason}/> */}






    {/* <AppButton type="submit" onPress={()=>setUpdate((prevState)=> !prevState)} title="tester"/> */}

        

            


        </Screen>
        
    );
}


const styles = StyleSheet.create({

    background:{
        backgroundColor: colours.lightblue,
        flex: 1,
        paddingBottom: 90,
        // borderRadius: 15,
        
    },

    whiteBackground:{
        backgroundColor: colours.white,

        borderRadius: 15,
        paddingTop: 20,
        

        
        

    },




    
    mainText:{
        fontSize: 40, 
        paddingTop: 5,
        paddingBottom: 10,
        fontWeight: 'bold', 
        textAlign: 'center',
        color: colours.danger,
        // fontFamily: 'Arial-BoldMT'
        // fontFamily: 'Helvetica Neue'
        fontFamily: 'Arial Rounded MT Bold'
        
    },

    mainText4:{
        fontSize: 40, 
        paddingTop: 5,
        paddingBottom: 10,
        fontWeight: 'bold', 
        textAlign: 'center',
        color: colours.reallyGrey,
        // fontFamily: 'Arial-BoldMT'
        // fontFamily: 'Helvetica Neue'
        fontFamily: 'Arial Rounded MT Bold',
        

        
    },

    emotionText:{
        fontFamily: 'Arial Rounded MT Bold',
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
        width: '60%',
        
        
        
    },

    emotionSub:{
        fontFamily: 'Arial Rounded MT Bold',
        fontSize: 15,
        justifyContent: 'center',
        flex: 1,
        

        
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
        height: 80,
        
    },

    marginT:{
        marginBottom: 90, 
        width: '90%',
        alignSelf: 'center',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        backgroundColor: colours.background, 
        height: '100%',
        paddingLeft: 5,
        paddingRight: 5,
        
        
    }
})

export default Analytics;
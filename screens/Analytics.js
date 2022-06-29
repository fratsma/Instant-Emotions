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
import Formiktest from './Formiktest';
import AppButton from '../components/AppButton';
import DropShadow from "react-native-drop-shadow";





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
                
            <View style={styles.container2}>
                <View>
                    {emotions.map(x => {
                        return <DailyView2 key={x.time} props={x}/>
                    })}

                </View> 
            

            
            <DropShadow style={styles.container}>
                <View style={styles.viewStyle}>
                        <Image style={styles.emotions} source={getImage('happy')}/>

                        <View style={styles.ViewReasons}>
                            <Text style={styles.emotionText}>happy</Text>
                            <Text style={styles.emotionSub}>Reason: my first entry</Text>
                            <Text style={styles.emotionSub}>Mood: 5</Text>
                            <Text style={styles.emotionSub}>{Moment(Date()).format('D MMM YYYY - h:mma ')}</Text>
                        </View>
                </View>
            </DropShadow>

            </View>
            
            </ScrollView>

            </View>

        

            


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

    container2:{
        marginBottom: 30
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
        
        
    },

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

export default Analytics;
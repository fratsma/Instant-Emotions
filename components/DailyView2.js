import React,  { Suspense, useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight, ActivityIndicator, FlatList, Alert, Pressable } from 'react-native';
import { getDatabase, ref, onValue, set, get, remove, removeData, update, child}  from "firebase/database";
import Moment from 'moment';
import {getImage} from '../config/images';
import colours from '../config/colours';
import DropShadow from "react-native-drop-shadow";
// import { FlatList } from 'react-native-gesture-handler';


Moment.suppressDeprecationWarnings = true;



function DailyView(props) {
    // console.log("View:")
    const data = props.props
    // console.log(data)

    const createTwoButtonAlert = () =>
    Alert.alert('Delete Entry', 'Are you sure you want to delete this input', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Delete', onPress: () => deleteData(), style: 'destructive', },
    ]);

    function deleteData(props){
        console.log(data)
        const db = getDatabase();
        const emotionsRef = ref(db, 'users/' + global.uid);
        get(emotionsRef).then((snapshot)=>{
            if(snapshot.exists()){
                var dataValues = snapshot.val();
                // console.log(dataValues)
                // console.log(data['time'])
                let x = 0

                // console.log(Object.dataValues(data))
                for (const value of Object.values(dataValues)){
                    if (value['entry']['time'] == data['time']){
                        // console.log("FCK YES")
                        // console.log(value)
                        // console.log(dataValues)
                        let deletable = (Object.keys(dataValues)[x])
                        // console.log(deletable)
                        // console.log('users/' +global.uid + '/' + deletable)
                        remove((ref(db, 'users/' + global.uid + '/' + deletable)))

                        
                        
                    }
                    x = x+1
                }
            }

        })

        
    }





    return (

        <DropShadow style={styles.container}>
            <View style={styles.viewStyle}>
                    <Image style={styles.emotions} source={getImage(data.feeling)}/>

                    <View style={styles.ViewReasons}>
                            <Pressable style={styles.delete} onPress={createTwoButtonAlert}>
                                <Text style={styles.emotionSub}>x</Text>
                            </Pressable>
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
        width: '60%',
        marginBottom: 20,
        
        
        
        
    },

    emotionSub:{
        fontFamily: 'Avenir',
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
    },

    delete:{
        position: 'absolute',
        width: '100%', 
        // alignItems: 'center',
        // paddingLeft: 150,
        left: '130%',
        // backgroundColor: colours.blue,
        marginVertical: -10


        
    },

    cross:{
        fontWeight: 'bold'
    }




})




export default DailyView;
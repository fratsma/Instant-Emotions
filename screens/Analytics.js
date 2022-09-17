import React, { useState, useEffect, Component, Suspense } from 'react';
import Screen from '../components/Screen';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight, ActivityIndicator, FlatList, RefreshControl, Modal, Pressable, Alert } from 'react-native';
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
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';





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


    const [emotions, setEmotions] = useState([]);
    const [modalVisibile, setModalVisible] = useState(false)
    

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
                Daily View
            </Text>
            {/* <Button title='heek' onPress={getData}/> */}


            
            <View style={styles.whiteBackground}>

            <ScrollView
                style={styles.marginT}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <Modal visible={modalVisibile} animationType="slide" transparent={true}>
                    <View style={styles.center}>
                    <View style={styles.modalView}>
                        <Pressable onPress={() => setModalVisible(false)}>
                            <Text style={styles.emotionText4}>x</Text>
                        </Pressable>
                        <Text style={styles.emotionText}>Here is where you can view all of your previous entries!</Text>
                        <Text style={styles.emotionText3}>Can't see anything?</Text>
                        <Text style={styles.emotionText}>This means that either, your data is loading and should be displayed soon</Text>
                        <Text style={styles.emotionText}>Or, you have not entered any data yet</Text>
                        <Text style={styles.emotionText3}>Missing recent entries?</Text>
                        <Text style={styles.emotionText}>Refresh the page by pulling down</Text>

                    </View>
                    </View>

                </Modal>
                <View style={styles.modalStyle}>
                    <Pressable style={styles.pressableStyle} onPress={() => setModalVisible(true)}>
                        <Text style={styles.emotionText2}>?</Text>
                    </Pressable>
                </View>
                

            <View style={styles.container2}>
                <View>
                    {emotions.map(x => {
                        return <DailyView2 key={x.time} props={x}/>
                    })}

                </View> 
            
            

            


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

    pressableStyle:{
        backgroundColor: colours.lightblue,
        borderRadius: 25,
        padding: 5,
        width: "8%",
        position: 'absolute',
        right: 3,
        // marginRight: "5%",

    },

    center:{
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalView: {

        marginTop: 220,
        backgroundColor: colours.lightblue,
        width: "80%",
        borderRadius: 20,
        padding: 15,

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },

    whiteBackground:{
        backgroundColor: colours.white,

        borderRadius: 15,
        paddingTop: 20,
        

        
        

    },


    modalStyle:{
        // position: 'absolute',
        // top: 0,
        // right: 10,
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
        fontFamily: 'Avenir-Black'
        
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
        fontFamily: 'Avenir-Black',
        

        
    },


    ViewReasons:{
        paddingLeft: 40,
        alignContent: 'center',
        alignItems: 'center',
        width: '60%',
        
        
        
    },

    emotionSub:{
        fontFamily: 'Avenir-Black',
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
        marginTop: 40,
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
        fontFamily: 'Avenir-Black',
        paddingBottom: 10,
        fontSize: 17,
        justifyContent: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        color: colours.white,
        
    },

    emotionText2:{
        fontFamily: 'Avenir-Black',
        fontSize: 15,
        justifyContent: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        color: colours.white,
        
    },

    emotionText3:{
        fontFamily: 'Avenir-Black',
        paddingTop: 20,

        paddingBottom: 10,
        fontSize: 20,
        justifyContent: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        color: colours.white,
        
    },

    emotionText4:{
        fontFamily: 'Avenir-Black',
        // paddingTop: 20,

        paddingBottom: 10,
        fontSize: 20,
        // justifyContent: 'center',
        fontWeight: 'bold',
        textAlign: 'right',
        color: colours.white,
        
    },

    ViewReasons:{
        paddingLeft: 40,
        alignContent: 'center',
        alignItems: 'center',
        width: '60%',
        marginBottom: 20,
        
        
        
        
    },

    emotionSub:{
        fontFamily: 'Avenir-Black',
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
import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppButton from '../components/AppButton';
// import { ScrollView } from 'react-native';
// import { View } from 'react-native';
import Screen from '../components/Screen';
import colours from '../config/colours';
import { Formik, Field, Form } from 'formik';
import { getCurrentTimestamp } from 'react-native/Libraries/Utilities/createPerformanceLogger';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Moment from 'moment';
import {getImage} from '../config/images'
import DailyView from '../components/DailyView';


// import AsyncStorage from '@react-native-async-storage/async-storage';

// import { initializeApp } from "firebase/app";
// import { utils } from '@react-native-firebase/app';
// import storage from '@react-native-firebase/storage';


// import database from '@react-native-firebase/database';
import { getDatabase, ref, onValue, set, get, child, Database, connectDatabaseEmulator, push,  } from 'firebase/database';
import App from '../App';
// import { ref as sRef } from 'firebase/storage';

function storeData(values, {resetForm}){
    const db = getDatabase();
    const reference = ref(db, 'users/' + global.uid);
    push(reference,  {
        entry: values
    });
    console.log('dataset')
    resetForm();
}

// function storeData(values){
//     console.log(values)
// }


// function storeData(){
//     database()
//         .ref('/users/1')
//         .set({
//             name: 'FREDDIE',
//             age: 19
//         })
//         console.log("Data set")
// }


// const storeData = async (values) => {
//     try {
//       const jsonValue = JSON.stringify(values)
//       await AsyncStorage.setItem('@storage_Key', jsonValue)
//       alert(jsonValue)
      
//     } catch (e) {
//       // saving error
//     }
//   }


// function getData(){}
// //     const dbRef = sRef(getDatabase)
// //     get(child(dbRef, 'entry')).then((snapshot) =>{
// //         if (snapshot.exists()){
// //             console.log(snapshot.val());

// //         } else{
// //             console.log("No Data Available")
// //         }
// //     })
// // }


    

function Formiktest(props) {
    // const db = getDatabase();
    // const getEmotions = ref(db, 'users/' + global.uid);
    // onValue(getEmotions, (snapshot)=>{
    //     var data = snapshot.val();

    //     for (const value of Object.values(data)) {
    //         console.log(value["entry"]["feeling"])
    //       }

    //     const numEntries = Object.keys(data).length
    //     console.log(numEntries)

    //     console.log(Object.values(data)[0]["entry"]["reason"])
    //     global.item1Emotion = Object.values(data)[numEntries-1]["entry"]["feeling"]
    //     global.item1Reason = Object.values(data)[numEntries-1]["entry"]["reason"]
    //     global.item1Mood = Object.values(data)[numEntries-1]["entry"]["mood"]
    //     global.item1Time = Object.values(data)[numEntries-1]["entry"]["time"]
    //     global.item1Time = Moment(global.item1Time).format('D MMM YYYY - h:mma ')
    //     global.item1Image = getImage(global.item1Emotion)


    //     item2Emotion = Object.values(data)[numEntries-2]["entry"]["feeling"]
    //     item2Reason = Object.values(data)[numEntries-2]["entry"]["reason"]
    //     item2Mood = Object.values(data)[numEntries-2]["entry"]["mood"]
    //     item2Time = Object.values(data)[numEntries-2]["entry"]["time"]

    //     item2Time = Moment(item2Time).format('D MMM YYYY - h:mma ')
    //     item2Image = getImage(item2Emotion)


        

    // })

    

    return (
        <Screen style={styles.background}>
            <Text style={styles.mainText}>Instant Emotions</Text>



            <Formik
                initialValues={{
                    feeling: '',
                    reason: '',
                    mood: '',
                    time: '',
                }}
                // onSubmit={(values)=> console.log(values)}
                onSubmit={storeData}
                // onSubmit={(values)=> AsyncStorage.setItem("token", values)}
                
            >

                {({handleChange, handleSubmit, resetForm, values, setFieldValue})=>(
                    <>
                    <ScrollView style={styles.scroller}>
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "happy")}>
                                <Image style={styles.emotions} source={require('../assets/happy.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Happy</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "excited")}>
                                <Image style={styles.emotions} source={require('../assets/excited.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Excited</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "amazed")}>
                                <Image style={styles.emotions} source={require('../assets/amazed.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Amazed</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "love")}>
                                <Image style={styles.emotions} source={require('../assets/love.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Love</Text>
                    
                        </View>
                    
                    </View>
    
    
    
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "amused")}>
                                <Image style={styles.emotions} source={require('../assets/amused.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Amused</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "admiration")}>
                                <Image style={styles.emotions} source={require('../assets/admiration.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Admiration</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "nostalgic")}>
                                <Image style={styles.emotions} source={require('../assets/nostalgic.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Nostalgic</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "rested")}>
                                <Image style={styles.emotions} source={require('../assets/rested.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Rested</Text>
                    
                        </View>
                    
                    </View>
    
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "passionate")}>
                                <Image style={styles.emotions} source={require('../assets/passionate.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Passionate</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "relieved")}>
                                <Image style={styles.emotions} source={require('../assets/relieved.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Relieved</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "blissful")}>
                                <Image style={styles.emotions} source={require('../assets/blissful.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Blissful</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "proud")}>
                                <Image style={styles.emotions} source={require('../assets/proud.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Proud</Text>
                    
                        </View>
                    
                    </View>
    
    
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "content")}>
                                <Image style={styles.emotions} source={require('../assets/content.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Content</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "meh")}>
                                <Image style={styles.emotions} source={require('../assets/meh.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Meh</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "emotional")}>
                                <Image style={styles.emotions} source={require('../assets/emotional.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Emotional</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "confused")}>
                                <Image style={styles.emotions} source={require('../assets/confused.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Confused</Text>
    
                        </View>
    
                    </View>
                    
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "hungry")}>
                                <Image style={styles.emotions} source={require('../assets/hungry.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Hungry</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "awkward")}>
                                <Image style={styles.emotions} source={require('../assets/awkward.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Awkward</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "tired")}>
                                <Image style={styles.emotions} source={require('../assets/tired2.jpg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Tired</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "shy")}>
                                <Image style={styles.emotions} source={require('../assets/shy.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Shy</Text>
    
                        </View>
    
                    </View>
    
    
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "shocked")}>
                                <Image style={styles.emotions} source={require('../assets/shocked.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Shocked</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "depend")}>
                                <Image style={styles.emotions} source={require('../assets/dependable.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Depend</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "sympathetic")}>
                                <Image style={styles.emotions} source={require('../assets/sympathetic.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Sympathy</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "guilty")}>
                                <Image style={styles.emotions} source={require('../assets/guilty.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Guilty</Text>
    
                        </View>
    
                    </View>
    
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "upset")}>
                                <Image style={styles.emotions} source={require('../assets/upset.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Upset</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "sad")}>
                                <Image style={styles.emotions} source={require('../assets/sad.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Sad</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "scared")}>
                                <Image style={styles.emotions} source={require('../assets/scared.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Scared</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "stressed")}>
                                <Image style={styles.emotions} source={require('../assets/stressed.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Stressed</Text>
    
                        </View>
    
                    </View>
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "anxious")}>
                                <Image style={styles.emotions} source={require('../assets/anxious.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Anxious</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "unwell")}>
                                <Image style={styles.emotions} source={require('../assets/unwell.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Unwell</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "annoyed")}>
                                <Image style={styles.emotions} source={require('../assets/annoyed.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Annoyed</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "frustrated")}>
                                <Image style={styles.emotions} source={require('../assets/frustrated.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Frustrated</Text>
    
                        </View>
    
                    </View>
    
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "disappointed")}>
                                <Image style={styles.emotions} source={require('../assets/disappointed.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Disappointed</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "overwhelmed")}>
                                <Image style={styles.emotions} source={require('../assets/overwhelmed.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Overwhelmed</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "jealous")}>
                                <Image style={styles.emotions} source={require('../assets/jealous.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Jealous</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "humiliated")}>
                                <Image style={styles.emotions} source={require('../assets/humiliated.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Humilated</Text>
    
                        </View>
    
                    </View>
    
                   
    
    
                    <Text style={styles.mainText}></Text>
    
    
                </ScrollView>   
    
                <Text style={styles.subText}>Why are you feeling {values.feeling}</Text>
    
                <View style={styles.viewInput}>
                    <TextInput 
                        style={styles.input}
                        onChangeText={handleChange("reason")}
                        maxLength={19}
                        
                    />
                </View>
    
    
    
                <Text style={styles.subText}>Rate your mood: {values.mood}</Text>
    
                <View style={styles.viewScore}>
                    <View style={styles.spaceseBetween2}>
                        <TouchableOpacity  
                                onPress={() => {setFieldValue("mood", "1"); setFieldValue("time", Date())}}>
                            <Text style={styles.mainText}>1</Text>
                        </TouchableOpacity>
                    </View>   
    
                    <View style={styles.spacesBetween2}>
                        <TouchableOpacity  
                                onPress={() => {setFieldValue("mood", "2"); setFieldValue("time", Date())}}>
                            <Text style={styles.mainText}>2</Text>
                        </TouchableOpacity>
                    </View> 
    
    
                    <View style={styles.spacesBetween2}>
                        <TouchableOpacity 
                                onPress={() => {setFieldValue("mood", "3"); setFieldValue("time", Date())}}>
                            <Text style={styles.mainText}>3</Text>
                        </TouchableOpacity>
                    </View> 
    
    
                    <View style={styles.spacesBetween2}>
                        <TouchableOpacity 
                                onPress={() => {setFieldValue("mood", "4"); setFieldValue("time", Date())}}>
                            <Text style={styles.mainText}>4</Text>
                        </TouchableOpacity>
                    </View> 
    
    
                    <View style={styles.spacesBetween2}>
                        <TouchableOpacity 
                                onPress={() => {setFieldValue("mood", "5"); setFieldValue("time", Date())}}>
                            <Text style={styles.mainText}>5</Text>
                        </TouchableOpacity>
                    </View> 
                </View>      
    
    
    
    
    
    
                <View style={styles.gap}>
                    <AppButton type="submit" onPress={handleSubmit} title="submit"/>
                    
                
                </View>


                </>
                )}

            

            </Formik>
            



            
            
            
        </Screen>
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: colours.background,
        flex: 1,
        paddingBottom: 20
    },

    emotions:{
        width: 70,
        height: 70,
    },

    happy:{
        fontSize: 12,
        color: colours.green,
        textAlign: 'center',
        fontFamily: 'KohinoorBangla-Semibold',
        paddingTop: 3
    },

    straight:{
        fontSize: 12,
        color: colours.grey,
        textAlign: 'center',
        fontFamily: 'KohinoorBangla-Semibold',
        paddingTop: 3
    },

    sad:{
        fontSize: 12,
        color: colours.red,
        textAlign: 'center',
        fontFamily: 'KohinoorBangla-Semibold',
        paddingTop: 3
    },

    mainText:{
        fontSize: 40, 
        paddingTop: 10,
        fontWeight: 'bold', 
        textAlign: 'center',
        color: colours.danger,
        // fontFamily: 'Arial-BoldMT'
        // fontFamily: 'Helvetica Neue'
        fontFamily: 'Kohinoor Bangla'
        
    },

    mainText2:{
        fontSize: 40, 
        paddingTop: 10,
        fontWeight: 'bold', 
        textAlign: 'center',
        color: colours.danger,
        fontFamily: 'Kohinoor Bangla',
        paddingHorizontal: 20,
        
    },

    gap:{
        alignItems: 'center'
    },

    scroller:{
        paddingTop: 40,
        backgroundColor: colours.white,
        
    },

    spacesBetween:{
        paddingLeft: 11,
        paddingRight: 11,
        
    },

    spacesBetween2:{
        paddingLeft: 15,
        paddingRight: 15,
    },

    viewStyle:{
        flexDirection: "row",
        height: 100,
        justifyContent: "center",
        
    },

    viewScore:{
        flexDirection: "row",
        height: 70,
        justifyContent: "center",
        
    },

    subText:{
        fontSize: 20, 
        paddingTop: 0,
        paddingBottom: 5,
        fontWeight: 'bold', 
        textAlign: 'center',
        color: colours.danger,
        fontFamily: 'Arial-BoldMT',
        marginTop: 20,
        marginBottom: 0,
    },

    input:{
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
        textAlign: 'center',
        color: colours.danger,
        borderColor: colours.danger,
        fontFamily: 'Arial-BoldMT',
        fontSize: 25,

    },

    viewInput:{
        alignItems: 'center',
        
    }


})

export default Formiktest;
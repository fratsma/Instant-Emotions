import React, { useReducer, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight, Keyboard, KeyboardAvoidingView, Modal, modalVisibile, Pressable } from 'react-native';
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
import * as yup from 'yup';
import { AntDesign } from '@expo/vector-icons';




// import AsyncStorage from '@react-native-async-storage/async-storage';

// import { initializeApp } from "firebase/app";
// import { utils } from '@react-native-firebase/app';
// import storage from '@react-native-firebase/storage';


// import database from '@react-native-firebase/database';
import { getDatabase, ref, onValue, set, get, child, Database, connectDatabaseEmulator, push,  } from 'firebase/database';
import App from '../App';
// import { ref as sRef } from 'firebase/storage';



// function storeData(values, {resetForm}, setModalVisible){

    
//     // const [modalVisibile, setModalVisible] = React.useState(false)
//     const db = getDatabase();
//     const reference = ref(db, 'users/' + global.uid);
//     push(reference,  {
//         entry: values
//     });
//     console.log('dataset')
//     resetForm(); 
//     // setModalVisible(true)

// }

    

function Formiktest(props) {

    const [modalVisibile, setModalVisible] = React.useState(false)

    const [reasonText, setReasonText] = React.useState('')

    

    let formSchema = yup.object().shape({
        
        feeling: yup.string().required(),
        mood: yup.number().required()
    })



        

    // })

    function storeData(values, {resetForm}, e){

    
        // const [modalVisibile, setModalVisible] = React.useState(false)
        // e.preventDefault()
        const db = getDatabase();
        const reference = ref(db, 'users/' + global.uid);
        push(reference,  {
            entry: values
        });
        console.log('dataset')
        resetForm();
        setReasonText('');
        setModalVisible(true)
    
    }

    

    return (
        <Screen style={styles.background}>
            <Text style={styles.mainText4}>Instant Emotions</Text>
            <Text style={styles.subText2}>Hey, how are you feeling?</Text>



            <Formik
                initialValues={{
                    feeling: '',
                    reason: 'no input',
                    mood: '',
                    time: Date(),
                }}
                validationSchema={formSchema}
                // onSubmit={(values)=> console.log(values)}
                onSubmit={storeData}
                // onSubmit={(values)=> AsyncStorage.setItem("token", values)}
                
            >

                {({handleChange, handleSubmit, resetForm, values, setFieldValue})=>(
                    <>
                        
                    <ScrollView style={styles.scroller}>

                    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "happy")}>
                                <Image style={styles.emotions} source={require('../assets/happy.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Happy</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "excited")}>
                                <Image style={styles.emotions} source={require('../assets/excited.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Excited</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "amazed")}>
                                <Image style={styles.emotions} source={require('../assets/amazed.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Amazed</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "love")}>
                                <Image style={styles.emotions} source={require('../assets/love.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Love</Text>
                    
                        </View>
                    
                    </View>
    
    
    
    
    
    
                    <View style={styles.viewStyle}>
    
                        

    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "admiration")}>
                                <Image style={styles.emotions} source={require('../assets/admiration.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Admiration</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "nostalgic")}>
                                <Image style={styles.emotions} source={require('../assets/nostalgic.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Nostalgic</Text>
                    
                        </View>

                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "amused")}>
                                <Image style={styles.emotions} source={require('../assets/amused.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Amused</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "rested")}>
                                <Image style={styles.emotions} source={require('../assets/rested.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Rested</Text>
                    
                        </View>
                    
                    </View>
    
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "passionate")}>
                                <Image style={styles.emotions} source={require('../assets/passionate.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Passionate</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "relieved")}>
                                <Image style={styles.emotions} source={require('../assets/relieved.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Relieved</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "blissful")}>
                                <Image style={styles.emotions} source={require('../assets/blissful.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Blissful</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "proud")}>
                                <Image style={styles.emotions} source={require('../assets/proud.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Proud</Text>
                    
                        </View>
                    
                    </View>
    
    
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "content")}>
                                <Image style={styles.emotions} source={require('../assets/content.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Content</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "meh")}>
                                <Image style={styles.emotions} source={require('../assets/meh.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Meh</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "emotional")}>
                                <Image style={styles.emotions} source={require('../assets/emotional.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Emotional</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "confused")}>
                                <Image style={styles.emotions} source={require('../assets/confused.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Confused</Text>
    
                        </View>
    
                    </View>
                    
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "hungry")}>
                                <Image style={styles.emotions} source={require('../assets/hungry.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Hungry</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "awkward")}>
                                <Image style={styles.emotions} source={require('../assets/awkward.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Awkward</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "tired")}>
                                <Image style={styles.emotions} source={require('../assets/tired2.jpg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Tired</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "shy")}>
                                <Image style={styles.emotions} source={require('../assets/shy.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Shy</Text>
    
                        </View>
    
                    </View>
    
    
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "shocked")}>
                                <Image style={styles.emotions} source={require('../assets/shocked.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Shocked</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "relaxed")}>
                                <Image style={styles.emotions} source={require('../assets/dependable.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Relaxed</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "nervous")}>
                                <Image style={styles.emotions} source={require('../assets/sympathetic.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Nervous</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "guilty")}>
                                <Image style={styles.emotions} source={require('../assets/guilty.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Guilty</Text>
    
                        </View>
    
                    </View>
    
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "upset")}>
                                <Image style={styles.emotions} source={require('../assets/upset.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Upset</Text>
    
                        </View>

                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "stunned")}>
                                <Image style={styles.emotions} source={require('../assets/overwhelmed.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Stunned</Text>
    
                        </View>
    

    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "scared")}>
                                <Image style={styles.emotions} source={require('../assets/scared.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Scared</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "stressed")}>
                                <Image style={styles.emotions} source={require('../assets/stressed.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Stressed</Text>
    
                        </View>
    
                    </View>
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "anxious")}>
                                <Image style={styles.emotions} source={require('../assets/anxious.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Anxious</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "unwell")}>
                                <Image style={styles.emotions} source={require('../assets/unwell.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Unwell</Text>
    
                        </View>
    


                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "down")}>
                                <Image style={styles.emotions} source={require('../assets/disappointed.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Down</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "frustrated")}>
                                <Image style={styles.emotions} source={require('../assets/frustrated.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Frustrated</Text>
    
                        </View>
    
                    </View>
    
    
    
    
                    <View style={styles.viewStyleBottom}>
    
                        




                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "annoyed")}>
                                <Image style={styles.emotions} source={require('../assets/annoyed.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Annoyed</Text>
    
                        </View>
    

    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "bored")}>
                                <Image style={styles.emotions} source={require('../assets/jealous.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Bored</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "humiliated")}>
                                <Image style={styles.emotions} source={require('../assets/humiliated.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Humiliated</Text>
    
                        </View>

                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={0.65} underlayColor={colours.lightgrey} 
                            onPress={() => setFieldValue("feeling", "sad")}>
                                <Image style={styles.emotions} source={require('../assets/sad.jpeg')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Sad</Text>
    
                        </View>
    
                    </View>
    
                   
    
    
                    {/* <Text style={styles.mainText}></Text> */}
    
    
                </ScrollView>   

                <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >

                <View style={styles.whiteBackground}>
                    
                <Text style={styles.subText}>Why are you feeling {values.feeling}?</Text>

    
                <View style={styles.viewInput}>
                    <TextInput 
                        style={styles.input}
                        onChangeText={handleChange("reason")}
                        onChange={(e) => setReasonText(e.target.value)}
                        maxLength={19}
                        // clearButtonMode="always"    
                        value={reasonText}                    
                        
                    />
                </View>
    
    
    
                <Text style={styles.subText}>Rate your mood: {values.mood}</Text>
    
                <View style={styles.viewScore}>
                    <View style={styles.spacesBetween2}>
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

                </View>
                </KeyboardAvoidingView>


                </>
                )}

            

            </Formik>

            <Modal visible={modalVisibile} animationType="slide" transparent={true}>
                    <View style={styles.center}>
                    <View style={styles.modalView}>
                        <Pressable onPress={() => setModalVisible(false)}>
                            <Text style={styles.emotionText4}>x</Text>
                        </Pressable>
                        <View style={styles.center}>
                            <AntDesign name='checkcircleo' size={125} color="lightgreen"/>
                            <Text style={styles.emotionText5}>Entry Saved!</Text>
                            <Text style={styles.emotionText4}>You got this :)</Text>
                        </View>

                    </View>
                    </View>

                </Modal>
            



            
            
            
        </Screen>
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: colours.lightblue,
        flex: 1,
        paddingBottom: 20,
        
        


        
    },

    whiteBackground:{
        backgroundColor: colours.background,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 1,
        shadowColor: colours.black,
        borderRadius: 10


    },

    buttonContainer:{
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 1,
        shadowColor: colours.black,
    },

    emotions:{
        width: 65,
        height: 65,
        
    },

    happy:{
        fontSize: 12,
        color: colours.green,
        textAlign: 'center',
        fontFamily: 'Avenir',
        paddingTop: 3
    },

    straight:{
        fontSize: 12,
        color: colours.grey,
        textAlign: 'center',
        fontFamily: 'Avenir',
        paddingTop: 3
    },

    sad:{
        fontSize: 12,
        color: colours.red,
        textAlign: 'center',
        fontFamily: 'Avenir',
        paddingTop: 3
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


    mainText2:{
        fontSize: 40, 
        paddingTop: 10,
        fontWeight: 'bold', 
        textAlign: 'center',
        color: colours.danger,
        fontFamily: 'Avenir-Black',
        paddingHorizontal: 20,
        
    },

    gap:{
        alignItems: 'center',
        paddingBottom: 30,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 1,
        shadowColor: colours.black,
    },

    scroller:{
        paddingTop: 20,
        backgroundColor: colours.white,
        width: '93%',
        alignSelf: 'center',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        borderBottomStartRadius: 2,
        borderBottomEndRadius: 2,

        

        
        
    },

    spacesBetween:{
        paddingLeft: 11,
        paddingRight: 11,

        
    },

    spacesBetween2:{
        width: "15%",
        // borderColor: colours.grey,
        borderColor: colours.lightblue,
        
        borderWidth: 1.5,
        alignItems: 'center',
        borderRadius: 50, 
        margin: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius:4,
        elevation: 1,
        shadowColor: colours.black,
        backgroundColor: colours.white,
    },

    viewStyle:{
        flexDirection: "row",
        height: 100,
        justifyContent: "center",
        

        
      
        
    },


    viewStyleBottom:{
        flexDirection: "row",
        height: 100,
        justifyContent: "center",
        marginBottom: 30,
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
        fontFamily: 'Avenir-Black',
        marginTop: 20,
        marginBottom: 0,
    },

    subText2:{
        fontSize: 20, 
        paddingTop: 0,
        paddingBottom: 5,
        fontWeight: 'bold', 
        textAlign: 'center',
        color: colours.white,
        fontFamily: 'Avenir-Black',
        marginTop: -10,
        marginBottom: 5,
    },

    input:{
        height: 55,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
        textAlign: 'center',
        color: colours.danger,
        borderColor: colours.lightblue,
        fontFamily: 'Avenir',
        fontSize: 20,
        borderRadius: 15,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 1,
        shadowColor: colours.black,
        backgroundColor: colours.white,


    },

    viewInput:{
        alignItems: 'center',

        
        
    }, 

    modalView: {

        marginTop: 160,
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

      center:{
        justifyContent: 'center',
        alignItems: 'center',
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

    emotionText5:{
        fontFamily: 'Avenir-Black',
        // paddingTop: 20,
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 20,
        // justifyContent: 'center',
        fontWeight: 'bold',
        textAlign: 'right',
        color: colours.white,
        
    },
    


})

export default Formiktest;
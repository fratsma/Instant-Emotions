import React from 'react';
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
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import { initializeApp } from "firebase/app";
// import { utils } from '@react-native-firebase/app';
// import storage from '@react-native-firebase/storage';
// import App from '../App';

// import database from '@react-native-firebase/database';
import { getDatabase, ref, onValue, set, get, child, Database, connectDatabaseEmulator, push } from 'firebase/database';
// import { ref as sRef } from 'firebase/storage';

function storeData(values){
    const db = getDatabase();
    const reference = ref(db, 'users/' + '1');
    push(reference,  {
        entry: values
    });
    console.log('dataset')
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
                            onPress={() => setFieldValue("feeling", "Happy")}>
                                <Image style={styles.emotions} source={require('../assets/confused.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Happy</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Excited")}>
                                <Image style={styles.emotions} source={require('../assets/anxious.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Excited</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Amazed")}>
                                <Image style={styles.emotions} source={require('../assets/annoyed.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Amazed</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Love")}>
                                <Image style={styles.emotions} source={require('../assets/amazing.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Love</Text>
                    
                        </View>
                    
                    </View>
    
    
    
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Amused")}>
                                <Image style={styles.emotions} source={require('../assets/confused.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Amused</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Admiration")}>
                                <Image style={styles.emotions} source={require('../assets/anxious.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Admiration</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Nostalgic")}>
                                <Image style={styles.emotions} source={require('../assets/annoyed.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Nostalgic</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Rested")}>
                                <Image style={styles.emotions} source={require('../assets/amazing.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Rested</Text>
                    
                        </View>
                    
                    </View>
    
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Passionate")}>
                                <Image style={styles.emotions} source={require('../assets/confused.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Passionate</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Relieved")}>
                                <Image style={styles.emotions} source={require('../assets/anxious.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Relieved</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Blissful")}>
                                <Image style={styles.emotions} source={require('../assets/annoyed.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Blissful</Text>
                    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Proud")}>
                                <Image style={styles.emotions} source={require('../assets/amazing.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.happy}>Proud</Text>
                    
                        </View>
                    
                    </View>
    
    
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Content")}>
                                <Image style={styles.emotions} source={require('../assets/anxious.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Content</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Meh")}>
                                <Image style={styles.emotions} source={require('../assets/confused.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Meh</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Emotional")}>
                                <Image style={styles.emotions} source={require('../assets/annoyed.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Emotional</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Confused")}>
                                <Image style={styles.emotions} source={require('../assets/amazing.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Confused</Text>
    
                        </View>
    
                    </View>
                    
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Hungry")}>
                                <Image style={styles.emotions} source={require('../assets/confused.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Hungry</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Awkward")}>
                                <Image style={styles.emotions} source={require('../assets/anxious.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Awkward</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Tired")}>
                                <Image style={styles.emotions} source={require('../assets/annoyed.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Tired</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Shy")}>
                                <Image style={styles.emotions} source={require('../assets/amazing.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Shy</Text>
    
                        </View>
    
                    </View>
    
    
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Shocked")}>
                                <Image style={styles.emotions} source={require('../assets/confused.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Shocked</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Depend")}>
                                <Image style={styles.emotions} source={require('../assets/anxious.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Depend</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Sympathetic")}>
                                <Image style={styles.emotions} source={require('../assets/annoyed.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Sympathy</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Guilty")}>
                                <Image style={styles.emotions} source={require('../assets/amazing.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.straight}>Guilty</Text>
    
                        </View>
    
                    </View>
    
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Upset")}>
                                <Image style={styles.emotions} source={require('../assets/confused.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Upset</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Sad")}>
                                <Image style={styles.emotions} source={require('../assets/anxious.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Sad</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Scared")}>
                                <Image style={styles.emotions} source={require('../assets/annoyed.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Scared</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Stressed")}>
                                <Image style={styles.emotions} source={require('../assets/amazing.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Stressed</Text>
    
                        </View>
    
                    </View>
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Anxious")}>
                                <Image style={styles.emotions} source={require('../assets/confused.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Anxious</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Unwell")}>
                                <Image style={styles.emotions} source={require('../assets/anxious.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Unwell</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Annoyed")}>
                                <Image style={styles.emotions} source={require('../assets/annoyed.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Annoyed</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Frustrated")}>
                                <Image style={styles.emotions} source={require('../assets/amazing.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Frustrated</Text>
    
                        </View>
    
                    </View>
    
    
    
    
                    <View style={styles.viewStyle}>
    
                        
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Dissapointed")}>
                                <Image style={styles.emotions} source={require('../assets/confused.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Disapointed</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Overwhelmed")}>
                                <Image style={styles.emotions} source={require('../assets/anxious.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Overwhelmed</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Jealous")}>
                                <Image style={styles.emotions} source={require('../assets/annoyed.png')}/>
                            </TouchableHighlight>
                            <Text style={styles.sad}>Jealous</Text>
    
                        </View>
    
                        <View style={styles.spacesBetween}>
                            <TouchableHighlight activeOpacity={1} underlayColor={colours.grey} 
                            onPress={() => setFieldValue("feeling", "Humiliated")}>
                                <Image style={styles.emotions} source={require('../assets/amazing.png')}/>
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
                        
                    />
                </View>
    
    
    
                <Text style={styles.subText}>Rate your mood</Text>
    
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
            



            
            
                


            <Text style={styles.mainText}>Navigation Bar</Text>


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
        width: 65,
        height: 65,
    },

    happy:{
        fontSize: 12,
        color: colours.green,
        textAlign: 'center',
        fontFamily: 'Arial-BoldMT'
    },

    straight:{
        fontSize: 12,
        color: colours.grey,
        textAlign: 'center',
        fontFamily: 'Arial-BoldMT'
    },

    sad:{
        fontSize: 12,
        color: colours.red,
        textAlign: 'center',
        fontFamily: 'Arial-BoldMT'
    },

    mainText:{
        fontSize: 40, 
        paddingTop: 10,
        fontWeight: 'bold', 
        textAlign: 'center',
        color: colours.danger,
        fontFamily: 'Arial-BoldMT'
        
    },

    mainText2:{
        fontSize: 40, 
        paddingTop: 10,
        fontWeight: 'bold', 
        textAlign: 'center',
        color: colours.danger,
        fontFamily: 'Arial-BoldMT',
        paddingHorizontal: 20,
        
    },

    gap:{
        alignItems: 'center'
    },

    scroller:{
        paddingTop: 40
        
    },

    spacesBetween:{
        paddingLeft: 11,
        paddingRight: 11,
        
    },

    spacesBetween2:{
        paddingLeft: 20,
        paddingRight: 20,
        
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
import React, { useState, useEffect, Component, Suspense } from 'react';
import Screen from '../components/Screen';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight, ActivityIndicator, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
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
// import * as StoreReview from 'expo-store-review';




function HelpMe(props) {

  
      
    const itunesItemId = 982107779;

    // Linking.openURL(
    //     `itms-apps://itunes.apple.com/app/viewContentsUserReviews/id${itunesItemId}?action=write-review`
    //   );
  
          
      return (
         <Screen style={styles.background}>
            <Text style={styles.mainText4}>
                Instant Emotions
            </Text>

            <View style={styles.whiteBackground}>

                <ScrollView style={styles.marginT}>

            
                <Text style={styles.subText}>Hours of Sleep: </Text>
    
                <View style={styles.viewScore}>
                    <View style={styles.spacesBetween2}>
                        <TouchableOpacity >
                            <Text style={styles.mainText}>1</Text>
                        </TouchableOpacity>
                    </View>   

                    <View style={styles.spacesBetween2}>
                        <TouchableOpacity  >
                            <Text style={styles.mainText}>2</Text>
                        </TouchableOpacity>
                    </View> 


                    <View style={styles.spacesBetween2}>
                        <TouchableOpacity >
                            <Text style={styles.mainText}>3</Text>
                        </TouchableOpacity>
                    </View> 


                    <View style={styles.spacesBetween2}>
                        <TouchableOpacity >
                            <Text style={styles.mainText}>4</Text>
                        </TouchableOpacity>
                    </View> 


                    <View style={styles.spacesBetween2}>
                        <TouchableOpacity >
                            <Text style={styles.mainText}>5</Text>
                        </TouchableOpacity>
                    </View> 
                </View>                

                <View style={styles.gap}/>

                <View style={styles.viewScore}>
                    <View style={styles.spacesBetween2}>
                        <TouchableOpacity >
                            <Text style={styles.mainText}>6</Text>
                        </TouchableOpacity>
                    </View>   

                    <View style={styles.spacesBetween2}>
                        <TouchableOpacity  >
                            <Text style={styles.mainText}>7</Text>
                        </TouchableOpacity>
                    </View> 


                    <View style={styles.spacesBetween2}>
                        <TouchableOpacity >
                            <Text style={styles.mainText}>8</Text>
                        </TouchableOpacity>
                    </View> 


                    <View style={styles.spacesBetween2}>
                        <TouchableOpacity >
                            <Text style={styles.mainText}>9</Text>
                        </TouchableOpacity>
                    </View> 


                    <View style={styles.spacesBetween2}>
                        <TouchableOpacity >
                            <Text style={styles.mainText}>+</Text>
                        </TouchableOpacity>
                    </View> 
                </View>     


                <Text style={styles.subText}>How Rested Do You Feel? </Text>
    
                <View style={styles.viewScore}>
                    <View style={styles.spacesBetween2}>
                        <TouchableOpacity >
                            <Text style={styles.mainText}>1</Text>
                        </TouchableOpacity>
                    </View>   

                    <View style={styles.spacesBetween2}>
                        <TouchableOpacity  >
                            <Text style={styles.mainText}>2</Text>
                        </TouchableOpacity>
                    </View> 


                    <View style={styles.spacesBetween2}>
                        <TouchableOpacity >
                            <Text style={styles.mainText}>3</Text>
                        </TouchableOpacity>
                    </View> 


                    <View style={styles.spacesBetween2}>
                        <TouchableOpacity >
                            <Text style={styles.mainText}>4</Text>
                        </TouchableOpacity>
                    </View> 


                    <View style={styles.spacesBetween2}>
                        <TouchableOpacity >
                            <Text style={styles.mainText}>5</Text>
                        </TouchableOpacity>
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
        paddingBottom: 15,
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

    input:{
        height: 55,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300,
        textAlign: 'center',
        color: colours.danger,
        borderColor: colours.lightblue,
        fontFamily: 'Avenir-Black',
        fontSize: 25,
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


})

export default HelpMe;
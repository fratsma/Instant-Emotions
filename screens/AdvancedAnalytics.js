import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight, Dimensions } from 'react-native';
import colours from '../config/colours';
// import { Text } from 'react-native';
import { getDatabase, ref, onValue} from "firebase/database";
import Screen from '../components/Screen';
import { PieChart } from 'react-native-chart-kit';


function AdvancedAnalytics(props) {

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

        })

        // const pieData = {
        //     [
        //         {
        //             name: 'amazed',
        //             frequency: 3,
        //         },
        //         {
        //             name: 'restful',
        //             frequency: 1,
        //         },
        //         {
        //             name: 'frustrated',
        //             frequency: 2,
        //         }
        //     ]}

        const pieData = [
            {
                name: 'amazed',
                frequency: 3
            },
            {
                name: 'restful',
                frequency: 1,
            },
            {
                name: 'frustrated',
                frequency: 1
            }
        ]
            

        
    return (
        <Screen style={styles.background}>
            <Text style={styles.mainText}>
                Instant Emotions
            </Text>


            {/* <PieChart
                data={pieData}
            /> */}

            <PieChart 
            data={pieData}
            />

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

})

export default AdvancedAnalytics;
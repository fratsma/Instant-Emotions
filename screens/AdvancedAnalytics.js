import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight, Dimensions } from 'react-native';
import colours from '../config/colours';
// import { Text } from 'react-native';
import { getDatabase, ref, onValue} from "firebase/database";
import Screen from '../components/Screen';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";


function AdvancedAnalytics(props) {
    var dictLength = 0
    var graphData = {}
    var commitsData = []
    const db = getDatabase();
    const getEmotions = ref(db, 'users/' + global.uid);
    onValue(getEmotions, (snapshot)=>{
        var data = snapshot.val();
        var x = 0

        for (const value of Object.values(data)) {
            console.log(value["entry"]["time"])
            graphData[x] = (value["entry"]["time"])
            // console.log(graphData)
            

            commitsData.push(
              {date: graphData[x], count: 1}
            )
              



            x=x+1



          }

          console.log(graphData)
        

        const numEntries = Object.keys(data).length
        console.log(numEntries)

        console.log(Object.values(data)[0]["entry"]["reason"])

        dictLength = Object.keys(graphData).length -1
        console.log(dictLength)
        console.log(new Date(graphData[dictLength]))


        })



        // const commitsData = [
        //     graphData
        //   ];




    
            

        
    return (
        <Screen style={styles.background}>
            <Text style={styles.mainText}>
                Instant Emotions
            </Text>



                    <View>
                    <ContributionGraph
                        values={commitsData}
                        endDate={new Date(graphData[dictLength])}
                        numDays={110}
                        height={220}
                        chartConfig={{
                            backgroundColor: colours.grey,
                            backgroundGradientFrom: colours.grey,
                            backgroundGradientTo: colours.grey,
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                              borderRadius: 16
                            },
                            propsForDots: {
                              r: "6",
                              strokeWidth: "2",
                              stroke: "#ffa726"
                            }
                          }}
/>
                    </View>


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

    graphWidth:{
      width: '80%',
    }

})

export default AdvancedAnalytics;
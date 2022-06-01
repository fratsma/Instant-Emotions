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

    var mood1 = 0
    var mood2 = 0
    var mood3 = 0
    var mood4 = 0
    var mood5 = 0

    var commitsData = []
    const db = getDatabase();
    const getEmotions = ref(db, 'users/' + global.uid);
    onValue(getEmotions, (snapshot)=>{
        var data = snapshot.val();
        var x = 0

        for (const value of Object.values(data)) {
            // console.log(value["entry"]["time"])
            graphData[x] = (value["entry"]["time"])
            // console.log(value["entry"]["mood"])

            if (value["entry"]["mood"] == 1) {
                mood1 += 1
            }
            else if (value["entry"]["mood"] == 2) {
                mood2 += 1
            }
            else if (value["entry"]["mood"] == 3) {
                mood3 += 1
            }
            else if (value["entry"]["mood"] == 4) {
                mood4 += 1
            }
            else if (value["entry"]["mood"] == 5) {
                mood5 += 1
            }

            commitsData.push(
              {date: graphData[x], count: 1}
            )
              



            x=x+1



          }

          console.log(graphData)
          console.log(mood3)
        

        const numEntries = Object.keys(data).length
        console.log(numEntries)

        console.log(Object.values(data)[0]["entry"]["reason"])

        dictLength = Object.keys(graphData).length -1
        console.log(dictLength)
        console.log(new Date(graphData[dictLength]))


        })


        const barData ={
          labels: ["1", "2", "3", "4", "5"],
          datasets: [
            {data: [mood1, mood2, mood3, mood4, mood5]}
          ]
        }




    
            

        
    return (
        <Screen style={styles.background}>
            <Text style={styles.mainText}>
                Instant Emotions
            </Text>



            <Text style={styles.subText}>Log Diary</Text>

            <View>
                    <ContributionGraph
                        values={commitsData}
                        endDate={new Date(graphData[dictLength])}
                        numDays={110}
                        width={400}

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


                    <Text style={styles.subText}>Mood Frequency</Text>



                    <View >
                    <BarChart
                      data={barData}
                      width={400}
                      height={220}
                      withInnerLines={false}
                     
                      chartConfig={{
                        backgroundColor: colours.grey,
                        backgroundGradientFrom: colours.grey,
                        backgroundGradientTo: colours.grey,
                        
                        decimalPlaces: 0, // optional, defaults to 2dp
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
                      verticalLabelRotation={30}
/>
                    </View>


        </Screen>
    );
}


const styles = StyleSheet.create({

    background:{
        backgroundColor: colours.background,
        flex: 1,
        paddingBottom: 20,
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



})

export default AdvancedAnalytics;
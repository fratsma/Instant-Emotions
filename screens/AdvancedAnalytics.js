import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight, Dimensions } from 'react-native';
import colours from '../config/colours';
// import { Text } from 'react-native';
import { getDatabase, ref, onValue} from "firebase/database";
import Screen from '../components/Screen';
import {
    LineChart,
    BarChart,
    // PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

import PieChart from 'react-native-expo-pie-chart';
import { get } from 'lodash';


function AdvancedAnalytics(props) {
    // [barData, setBarData] = React.useState({
    //       labels: ["1", "2", "3", "4", "5"],
    //       datasets: [
    //         {data: []}
    //       ]
    //     })
    [pieData, setPieData] = React.useState([])
    // [commits, setCommits] = React.useState()

  
    var dictLength = 0
    var graphData = {}
 
    var mood1 = 0
    var mood2 = 0
    var mood3 = 0
    var mood4 = 0
    var mood5 = 0

    var green = 0
    var grey = 0
    var red = 0

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

            if (value["entry"]["feeling"] == "happy" || value["entry"]["feeling"] == "excited" || value["entry"]["feeling"] == "amazed" 
                || value["entry"]["feeling"] == "amused" || value["entry"]["feeling"] == "admiration" || value["entry"]["feeling"] == "nostalgic"
                || value["entry"]["feeling"] == "rested" || value["entry"]["feeling"] == "passionate" || value["entry"]["feeling"] == "relieved"
                || value["entry"]["feeling"] == "blissful" || value["entry"]["feeling"] == "proud") {
                green += 1
            }
            else if (value["entry"]["feeling"] == "sad" || value["entry"]["feeling"] == "upset" || value["entry"]["feeling"] == "scared"
                || value["entry"]["feeling"] == "stressed" || value["entry"]["feeling"] == "anxious" || value["entry"]["feeling"] == "unwell"
                || value["entry"]["feeling"] == "annoyed" || value["entry"]["feeling"] == "frustrated" || value["entry"]["feeling"] == "disappointed"
                || value["entry"]["feeling"] == "overwhelmed" || value["entry"]["feeling"] == "jealous" || value["entry"]["feeling"] == "humiliated"){
                red += 1
            }

            else if (value["entry"]["feeling"] == "content" || value["entry"]["feeling"] == "meh" || value["entry"]["feeling"] == "emotional"
                || value["entry"]["feeling"] == "confused" || value["entry"]["feeling"] == "hungry" || value["entry"]["feeling"] == "awkward"
                || value["entry"]["feeling"] == "tired" || value["entry"]["feeling"] == "shy" || value["entry"]["feeling"] == "shocked"
                || value["entry"]["feeling"] == "depend" || value["entry"]["feeling"] == "sympathy" || value["entry"]["feeling"] == "guilty"){
                grey += 1
            }
                





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
 
 


    // React.useEffect(() => {
    //   const db = getDatabase();
    //   const getEmotions = ref(db, 'users/' + global.uid);
    //   get(getEmotions).then((snapshot) => {
    //     if (snapshot.exists()) {
    //       console.log("g")
    //     }
    //   }).catch((error) => {
    //     console.error(error);
    // });


    // },[]);

     
            

        
    return (
        <Screen style={styles.background}>
            <Text style={styles.mainText}>
                Instant Emotions
            </Text>


            <ScrollView>


            <Text style={styles.subText}>Log Diary</Text>

            <View style={{alignItems: 'center'}}>
                    <ContributionGraph
                        values={commitsData}
                        endDate={new Date(graphData[dictLength])}
                        numDays={365}
                        width={400}

                        height={220}
                        squareSize={5}
                        showMonthLabels={false}
                        gutterSize={0}
                        // horizontal={false}

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
                            },
                          }}

/>
                    </View>


                    <Text style={styles.subText}>Mood Frequency</Text>



                    <View  style={{alignItems: 'center'}}>
                    <BarChart
                      data={barData}
                      width={400}
                      height={220}
                      withInnerLines={false}
                      fromZero={true}
                     
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
                      style={{
                        borderRadius: 16
                    
                      }}
                      verticalLabelRotation={30}
/>
                    </View>

                    <Text style={styles.subText}>Mood Breakdown</Text>


                    <View style={styles.spacer}>

                      

                    <PieChart
                      data={pieData}
                      length={200}
                      />
                    </View>

            </ScrollView>



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

  spacer:{
    // paddingBottom: 20,
    paddingTop: 10,
    // marginBottom: 20,
    // marginTop: 20,
  },





})

export default AdvancedAnalytics;
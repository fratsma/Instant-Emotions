import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight, Dimensions, RefreshControl } from 'react-native';
import colours from '../config/colours';
// import { Text } from 'react-native';
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
import { getDatabase, ref, onValue, update, get, child} from "firebase/database";

import Moment from 'moment';
import {getImage} from '../config/images'


Moment.suppressDeprecationWarnings = true;


function AdvancedAnalytics(props) {
  
   const [barData, setBarData] = React.useState({
          labels: ["1", "2", "3", "4", "5"],
          datasets: [
            {data: []}
          ]
        })
    const [pieData, setPieData] = React.useState([])
    const [commitsData, setCommitsData] = React.useState([])
    const [graphData, setGraphData] = React.useState({})
    const [dictLength, setDictLength] = React.useState(0)

    const [numEntry, setNumEntry] = React.useState(0)

    const [numStreak, setNumStreak] = React.useState(0)

    // var dictLength = 0
    // var graphData = {}
 
    var mood1 = 0
    var mood2 = 0
    var mood3 = 0
    var mood4 = 0
    var mood5 = 0
    var checker = 0
    var current = 0

    var green = 0
    var grey = 0
    var red = 0
    var dater = false

    var streak = []
    var time = 0
    var count = 0

    var numEntries = 0
    var lineData = []
    var lineValues = {}
    // var lineObj = []

    const db = getDatabase();
    const getEmotions = ref(db, 'users/' + global.uid);


 
 


    React.useEffect(() => {
      const db = getDatabase();
      const emotionsRef = ref(db, 'users/' + global.uid);
      // console.log(emotionsRef)
  
      get(emotionsRef).then((snapshot) => {
      if (snapshot.exists()) {
          console.log("yays")
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
                || value["entry"]["feeling"] == "blissful" || value["entry"]["feeling"] == "proud" || value["entry"]["feeling"] == "love") {
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


            lineData.push(JSON.parse(value["entry"]["mood"]))   


            time = (value["entry"]["time"])

            streak.push(Moment(time).format('D MMM YYYY'))







          }

          // console.log(graphData)
          // console.log(mood3)
          // console.log(lineData)

          console.log(streak)

          


        

        numEntries = Object.keys(data).length

        console.log("HEY")
        var i = numEntries 
        var oneBehind = numEntries - 1
        // current = (Moment(streak[numEntries-1]).format('D MMM YYYY'))
        // checker = (Moment(streak[numEntries-1]).subtract(1, 'days').format('D MMM YYYY'))



        // console.log("checker")
        // console.log(checker)
        // console.log("CURRENT")
        // console.log(current)

        while (dater == false) {
          current = (Moment(streak[i]).format('D MMM YYYY'))
          checker = (Moment(streak[oneBehind]).subtract(1, 'days').format('D MMM YYYY'))
          if (checker == current) {
            count += 1
            i = i - 1
            oneBehind = oneBehind - 1

          }
           
          else if ( Moment(checker).add(1, 'days').format('D MMM YYYY') == current) {
            count += 0
            i = i - 1

    
            
          }
          else{
            dater = true

            
          }
            
        }


        console.log("count")
        console.log(count)
        setNumStreak(count)

        



        // console.log(numEntries)

        console.log(Object.values(data)[0]["entry"]["reason"])

        setDictLength( Object.keys(graphData).length -1)
        console.log(dictLength)
        console.log(new Date(graphData[dictLength]))

        setNumEntry(numEntries)

      setBarData({
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          {data: [mood1, mood2, mood3, mood4, mood5]}
        ]
      })

      setPieData([
        {key: "Happy", count: green, color: colours.green},
        {key: "Sad", count: red, color: colours.red},
        {key: "Meh", count: grey, color: colours.grey}
      ])
          // console.log("emotions: ",emotions)
      } else {
          // console.log("No data available");
      }
      }).catch((error) => {
      console.error(error);
  });
  }, []
  )

    
            

        
    return (
        <Screen style={styles.background}>
            <Text style={styles.mainText4}>
                Instant Emotions
            </Text>


            <View style={styles.whiteBackground}>


            <ScrollView style={styles.whiteBackground}>

            <View style={styles.viewStyle}>
              

              <View style={styles.spacesBetween}>
                <Text style={styles.subText2}>Number of Entries</Text>
                <Text style={styles.mainText4}>{numEntry}</Text>
              </View>

              <View style={styles.spacesBetween}>
                <Text style={styles.subText2}>Current Streak</Text>
                <Text style={styles.mainText4}>{numStreak}</Text>
              </View>


            </View>


            {/* <Text style={styles.subText}>Log Diary</Text>

            <View style={{alignItems: 'center', marginRight: 50}}>
                    <ContributionGraph
                        values={commitsData}
                        endDate={new Date()}
                        numDays={365}
                        width={400}

                        height={300}
                        squareSize={20}
                        showMonthLabels={true}
                        gutterSize={0}
                        // horizontal={false}

                        chartConfig={{
                            backgroundColor: colours.white,
                            backgroundGradientFrom: colours.white,
                            backgroundGradientTo: colours.white,
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => colours.lightblue,
                            labelColor: (opacity = 1) => colours.black,
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
                    </View> */}


                  
                   


                    <Text style={styles.subText3}>Mood Frequency</Text>

                    <View  style={styles.shadow}>
                    
                    
                    <BarChart
                      data={barData}
                      width={360}
                      height={220}
                      withInnerLines={false}
                      fromZero={true}
                      
                     
                      chartConfig={{
                        backgroundColor: colours.white,
                        backgroundGradientFrom: colours.white,
                        backgroundGradientTo: colours.white,
                        
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => colours.grey,
                        labelColor: (opacity = 1) => colours.black,
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
                        borderRadius: 16,
                    
                    
                      }}
                      verticalLabelRotation={30}
/>
                    </View>

                    <Text style={styles.subText}>Mood Breakdown</Text>


                    <View style={styles.spacer}>

                    <View style={styles.shadow}>

                    <PieChart
                      data={pieData}
                      length={200}
                      />
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
          borderRadius: 15

      },

      blueBackground:{
        backgroundColor: colours.lightblue,
        borderRadius: 15

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
      fontFamily: 'Arial Rounded MT Bold'
      
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
    fontFamily: 'Arial Rounded MT Bold',
    color: colours.lightgrey,
    

    
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
      fontFamily: 'Arial Rounded MT Bold',
      marginTop: 20,
      marginBottom: 0,
  },

  subText3:{
    fontSize: 20, 
    paddingTop: 0,
    paddingBottom: 15,
    fontWeight: 'bold', 
    textAlign: 'center',
    color: colours.danger,
    fontFamily: 'Arial Rounded MT Bold',
    marginTop: 20,
    marginBottom: 0,
},

  subText2:{
    fontSize: 15, 
    fontWeight: 'bold', 
    textAlign: 'center',
    color: colours.lightgrey,
    fontFamily: 'Arial Rounded MT Bold',
    marginTop: 10,
    marginBottom: 0,
},

  spacer:{
    // paddingBottom: 20,
    paddingTop: 10,
    marginBottom: 120,
    // marginBottom: 20,
    // marginTop: 20,
  },

  viewStyle:{
    flexDirection: "row",
    height: 100,
    justifyContent: "center",
    marginTop: 20,
    },

spacesBetween:{
  paddingLeft: 11,
  paddingRight: 11,
  borderWidth: 2,
  width: '40%',
  marginRight: 12,
  marginLeft: 12,
  borderRadius: 15,
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 1,
  shadowColor: colours.black,
  backgroundColor: colours.lightblue,
  
},

shadow:{
  alignItems: 'center',
  // marginLeft: '10%',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 5,
  elevation: 1,
  shadowColor: colours.black,

}





})

export default AdvancedAnalytics;
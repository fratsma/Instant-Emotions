import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight, Dimensions, RefreshControl, Modal, Pressable } from 'react-native';
import colours from '../config/colours';
// import { Text } from 'react-native';
import Screen from '../components/Screen';
import {
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
import { LogBox } from 'react-native';

import PureChart from 'react-native-pure-chart';


Moment.suppressDeprecationWarnings = true;





function AdvancedAnalytics(props) {
  
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      var mood1 = 0
      var mood2 = 0
      var mood3 = 0
      var mood4 = 0
      var mood5 = 0
      var checker = 0
      var current = 0
      var today = 0
      var averageRecent = 0
      var recentMood = 0
      var percentageChange = 0
  
      var green = 0
      var grey = 0
      var red = 0
      var dater = false
      var recent = 0
  
      var moodLine = []
      var time = 0
      // var count = 0
  
      var numEntries = 0
        const db = getDatabase();
        const emotionsRef = ref(db, 'users/' + global.uid);
        get(emotionsRef).then((snapshot) => {
          if (snapshot.exists()) {
              // console.log("yays")
              var data = snapshot.val();
            var x = 0
            numEntries = Object.keys(data).length

            // console.log(Object.values(data))





            for (const value of Object.values(data)) {
                // console.log(value["entry"]["time"])
                graphData[numEntries-1] = (value["entry"]["time"])
                // console.log(value["entry"]["mood"])

                if (value["entry"]["mood"] == 1) {
                    mood1 += 1
                    moodLine.push(1)
                    recent += 1
                    recentMood = 1
                }
                else if (value["entry"]["mood"] == 2) {
                    mood2 += 1
                    moodLine.push(2)
                    recent += 2
                    recentMood = 2
                }
                else if (value["entry"]["mood"] == 3) {
                    mood3 += 1
                    moodLine.push(3)
                    recent += 3
                    recentMood = 3
                }
                else if (value["entry"]["mood"] == 4) {
                    mood4 += 1
                    moodLine.push(4)
                    recent += 4
                    recentMood = 4
                }
                else if (value["entry"]["mood"] == 5) {
                    mood5 += 1
                    moodLine.push(5)
                    recent += 5
                    recentMood = 5
                }

              
                
                // console.log(recent)

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




                time = (value["entry"]["time"])

                // streak.push(Moment(time).format('D MMM YYYY'))



              }

              // console.log(streak)


            // console.log("count")
            // console.log(count)
            // setNumStreak(count)





            // console.log(numEntries)

            // console.log(Object.values(data)[0]["entry"]["reason"])

            // setDictLength( Object.keys(graphData).length -1)
            // console.log(dictLength)
            // console.log(new Date(graphData[dictLength]))

          
          setNumEntry(numEntries)
          averageRecent = recent / numEntries

          // console.log("FINAL")
          // console.log(averageRecent)
          // console.log(recentMood)

          // percentageChange = (averageRecent - recentMood)/averageRecent
          percentageChange = (recentMood - averageRecent) / recentMood
          percentageChange = percentageChange * 100
          percentageChange = percentageChange.toFixed(2)
          // console.log(percentageChange)

          setMoodData(percentageChange)


          setBarData({
            labels: ["1", "2", "3", "4", "5"],
            datasets: [
              {data: [mood1, mood2, mood3, mood4, mood5]}
            ]
          })

          setLineData(
            moodLine

        )

          // console.log(lineData)

          setPieData([
            {key: "Happy", count: green, color: colours.green},
            {key: "Sad", count: red, color: colours.red},
            {key: "Meh", count: grey, color: colours.grey}
          ])
          setRefreshing(false)
              // console.log("emotions: ",emotions)
          } else {
            setRefreshing(false)
              // console.log("No data available");
          }
          })
          .catch((error) => {
          console.error(error);
          setRefreshing(false)

          
      });
      }, []
      )

   const [barData, setBarData] = React.useState({
          labels: ["1", "2", "3", "4", "5"],
          datasets: [
            {data: []}
          ]
        })

    const [modalVisibile, setModalVisible] = React.useState(false)
    const [lineData, setLineData] = React.useState([])
    
    const [pieData, setPieData] = React.useState([])
    const [commitsData, setCommitsData] = React.useState([])
    const [graphData, setGraphData] = React.useState({})
    const [dictLength, setDictLength] = React.useState(0)
    const [moodData, setMoodData] = React.useState(0)

    // const [lineData, setLineData] = React.useState(0)



    // const [lineData, setLineData] = React.useState()


    const [numEntry, setNumEntry] = React.useState(0)

    // const [numStreak, setNumStreak] = React.useState(0)

    // var dictLength = 0
    // var graphData = {}
 
    var mood1 = 0
    var mood2 = 0
    var mood3 = 0
    var mood4 = 0
    var mood5 = 0
    var checker = 0
    var current = 0
    var today = 0
    var recentMood = 0
    var percentageChange = 0

    var green = 0
    var grey = 0
    var red = 0
    var dater = false
    var recent = 0
    var averageRecent = 0

    var moodLine = [0]
    var time = 0
    var count = 0

    var numEntries = 0
    // var lineObj = []

    const db = getDatabase();
    const getEmotions = ref(db, 'users/' + global.uid);


 
 


    React.useEffect(() => {
      const db = getDatabase();
      const emotionsRef = ref(db, 'users/' + global.uid);
      // console.log(emotionsRef)
  
      get(emotionsRef).then((snapshot) => {
      if (snapshot.exists()) {
          // console.log("yays")
          var data = snapshot.val();
        var x = 0

        for (const value of Object.values(data)) {
            // console.log(value["entry"]["time"])
            graphData[x] = (value["entry"]["time"])
            // console.log(value["entry"]["mood"])


            if (value["entry"]["mood"] == 1) {
              mood1 += 1
              moodLine.push(1)
              recent += 1
              recentMood = 1
          }
          else if (value["entry"]["mood"] == 2) {
              mood2 += 1
              moodLine.push(2)
              recent += 2
              recentMood = 2
          }
          else if (value["entry"]["mood"] == 3) {
              mood3 += 1
              moodLine.push(3)
              recent += 3
              recentMood = 3
          }
          else if (value["entry"]["mood"] == 4) {
              mood4 += 1
              moodLine.push(4)
              recent += 4
              recentMood = 4
          }
          else if (value["entry"]["mood"] == 5) {
              mood5 += 1
              moodLine.push(5)
              recent += 5
              recentMood = 5
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





            time = (value["entry"]["time"])

            // streak.push(Moment(time).format('D MMM YYYY'))







          }

          // console.log(graphData)
          // console.log(mood3)

          // console.log(streak)

          


        

        numEntries = Object.keys(data).length

        averageRecent = recent / numEntries

          // console.log("FINAL")
          // console.log(averageRecent)
          // console.log(recentMood)

          percentageChange = (recentMood - averageRecent) / recentMood
          percentageChange = percentageChange * 100
          percentageChange = percentageChange.toFixed(2)
          // console.log(percentageChange)

          setMoodData(percentageChange)

        // console.log("count")
        // console.log(count)

        // console.log(Object.values(data)[0]["entry"]["reason"])

        setDictLength( Object.keys(graphData).length -1)
        // const [modalVisibile, setModalVisible] = React.useState(false)


        setNumEntry(numEntries)

        setLineData(
            moodLine

        )
        

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


            <ScrollView refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>

            <Modal visible={modalVisibile} animationType="slide" transparent={true}>
                    <View style={styles.center}>
                    <View style={styles.modalView}>
                        <Pressable onPress={() => setModalVisible(false)}>
                            <Text style={styles.emotionText4}>x</Text>
                        </Pressable>
                        <Text style={styles.emotionText}>Here you can see more in depth information about your entries</Text>
                        <Text style={styles.emotionText}>The more entries, the more accurate the information will be</Text>
                        <Text style={styles.emotionText3}>Can't see any data?</Text>
                        <Text style={styles.emotionText}>This means that either, your data is loading and should be displayed soon</Text>
                        <Text style={styles.emotionText}>Or, you have not entered any data yet</Text>
                        <Text style={styles.emotionText3}>Missing recent entries?</Text>
                        <Text style={styles.emotionText}>Refresh the page by pulling down</Text>

                    </View>
                    </View>

                </Modal>
                    <Pressable style={styles.pressableStyle} onPress={() => setModalVisible(true)}>
                        <Text style={styles.emotionText2}>?</Text>
                    </Pressable>


            <View style={styles.viewStyle}>
              

              <View style={styles.spacesBetween}>
                <Text style={styles.subText2}>Entry Count</Text>
                <Text style={styles.mainText5}>{numEntry}</Text>
              </View>

              <View style={styles.spacesBetween}>
                <Text style={styles.subText2}>Mood Difference</Text>
                <Text style={styles.mainText5}>{moodData}%</Text>
              </View>

              {/* <View style={styles.spacesBetween}>
                <Text style={styles.subText2}>Current Streak</Text>
                <Text style={styles.mainText4}>{numStreak}</Text>
              </View> */}


            </View>



                  
                   


                    <Text style={styles.subText3}>Mood Frequency</Text>

                    <View  style={styles.shadow}>
                    
                    
                    <BarChart
                      data={barData}
                      width={360}
                      height={220}
                      withInnerLines={false}
                      fromZero={true}
                      // chartBreakPoints={[0, 1, 2, 3, 4, 5]}
                      // hidePointsAtIndex={[0, 1, 2, 3, 4, 5]}
                      // withHorizontalLabels={false}
                      

                    
         
                      chartConfig={{
                        
                        
                        backgroundColor: colours.white,
                        backgroundGradientFrom: colours.white,
                        backgroundGradientTo: colours.white,
                        
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => colours.grey,
                        labelColor: (opacity = 1) => colours.black,
                        // style: {
                        //   borderRadius: 16,
                        // },
                        propsForDots: {
                          r: "6",
                          strokeWidth: "2",
                          stroke: "#ffa726"
                        }
                      }}
                      style={{
                        borderRadius: 16,

                    
                    
                      }}
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
                    

                    <Text style={styles.subText}>Continuous Mood</Text>

              <View style={styles.shadow2}>

                <PureChart data={lineData} type='line' />

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

mainText5:{
  fontSize: 35, 
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
    fontSize: 17, 
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
    marginBottom: 10,
    // marginBottom: 20,
    // marginTop: 20,
  },

  // spacer2:{
  //   // paddingBottom: 20,
  //   // paddingTop: 10,
  //   marginBottom: 500,
  //   // marginBottom: 20,
  //   // marginTop: 20,
  // },

  viewStyle:{
    flexDirection: "row",
    height: 100,
    justifyContent: "center",
    marginTop: 35,
    },

spacesBetween:{
  // paddingLeft: 8,
  // paddingRight: 8,
  borderWidth: 2,
  width: '42%',
  marginRight: 8,
  marginLeft: 8,
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
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 5,
  elevation: 1,
  shadowColor: colours.black,

},

shadow2:{
  alignItems: 'center',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.5,
  shadowRadius: 5,
  elevation: 1,
  shadowColor: colours.black,
  marginBottom: 120,
  marginTop: 10,

  
}, 

pressableStyle:{
  backgroundColor: colours.lightblue,
  borderRadius: 25,
  padding: 5,
  width: "7%",
  position: 'absolute',
  right: 27,
  // marginRight: "5%",

},

center:{
  justifyContent: 'center',
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

whiteBackground:{
  backgroundColor: colours.white,

  borderRadius: 15,
  paddingTop: 20,
  

  
  

},

emotionText:{
  fontFamily: 'Arial Rounded MT Bold',
  paddingBottom: 10,
  fontSize: 17,
  justifyContent: 'center',
  fontWeight: 'bold',
  textAlign: 'center',
  color: colours.white,
  
},

emotionText2:{

  fontFamily: 'Arial Rounded MT Bold',
  fontSize: 15,
  justifyContent: 'center',
  fontWeight: 'bold',
  textAlign: 'center',
  color: colours.white,
  
},

emotionText3:{
  fontFamily: 'Arial Rounded MT Bold',
  paddingTop: 20,

  paddingBottom: 10,
  fontSize: 20,
  justifyContent: 'center',
  fontWeight: 'bold',
  textAlign: 'center',
  color: colours.white,
  
},

emotionText4:{
  fontFamily: 'Arial Rounded MT Bold',
  // paddingTop: 20,

  paddingBottom: 10,
  fontSize: 20,
  // justifyContent: 'center',
  fontWeight: 'bold',
  textAlign: 'right',
  color: colours.white,
  
},







})

export default AdvancedAnalytics;
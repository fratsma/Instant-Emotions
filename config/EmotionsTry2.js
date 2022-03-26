
// import React from 'react';
// import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight } from 'react-native';
// import { getDatabase, ref, onValue} from "firebase/database";
// import Moment from 'moment';
// import {getImage} from './images'
// import Screen from '../components/Screen';



// function EmotionsTry2(props){
//     const db = getDatabase();
//     const getEmotions = ref(db, 'users/' + global.uid);
//     onValue(getEmotions, (snapshot)=>{
//         var data = snapshot.val();

//         for (const value of Object.values(data)) {
//             console.log(value["entry"]["feeling"])
//           }

//         const numEntries = Object.keys(data).length
//         console.log(numEntries)

        

//         global.item1Emotions = Object.values(data)[numEntries-1]["entry"]["feeling"]
//         global.item1Reasons = Object.values(data)[numEntries-1]["entry"]["reason"]
//         global.item1Moods = Object.values(data)[numEntries-1]["entry"]["mood"]
//         global.item1Times = Object.values(data)[numEntries-1]["entry"]["time"]
//         global.item1Times = Moment(global.item1Times).format('D MMM YYYY - h:mma ')
//         global.item1Images = getImage(global.item1Emotion)

//         item0Emotion = 'sad',
//         item0Reason = 'cunts',
//         item0Mood = '1',
//         item0Time = 'monday',
//         item0Image = require('../assets/guilty.jpeg')



//     return(
//         <Screen>
//             <View style={styles.viewStyle}>
//                 <Image style={styles.emotions} source={global.item1Image}/>
//                 <View style={styles.ViewReasons}>
//                     <Text style={styles.emotionText}>{global.item1Emotion}</Text>
//                     <Text style={styles.emotionSub}>Reason: {global.item1Reason}</Text>
//                     <Text style={styles.emotionSub}>Mood: {global.item1Mood}</Text>
//                     <Text style={styles.emotionSub}>{global.item1Time}</Text>
//                 </View>
//             </View>
//         </Screen>

// );
//     })}

// const styles = StyleSheet.create({

//     emotionText:{
//         fontFamily: 'Kohinoor Bangla',
//         fontSize: 20,
//         justifyContent: 'center',
//         fontWeight: 'bold',
//         textAlign: 'center',
//         textTransform: 'capitalize', 
//     },

//     ViewReasons:{
//         paddingLeft: 40,
//         alignContent: 'center',
//         alignItems: 'center',
//         width: '60%'
        
        
//     },

//     emotionSub:{
//         fontFamily: 'Kohinoor Bangla',
//         fontSize: 15,
//         justifyContent: 'center',
//         flex: 1

        
//     },

//     viewStyle:{
//         flexDirection: 'row',
//         height: 120,
//         justifyContent: 'center',
//         // paddingLeft: 40,
//         paddingTop: 10,

//     },

    

//     emotions:{
//         width: 80,
//         height: 80
//     },
// })


// export default EmotionsTry2;



// // export default{
    
// //     // item0Emotion: emotions2.item1Emotions,
// //     // item0Reason: emotions2.item1Reasons,
// //     // item0Mood: emotions2.item1Moods,
// //     // item0Time: emotions2.item1Times,
// //     // item0Image: emotions2.item1Images

// //     item0Emotion: 'sad',
// //     item0Reason: 'cunts',
// //     item0Mood: '1',
// //     item0Time: 'monday',
// //     item0Image: require('../assets/guilty.jpeg')
// // }
// import { getDatabase, ref, onValue} from "firebase/database";
// import Moment from 'moment';
// import {getImage} from '../config/images'


// export function databaseEmotions(input){
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

//         console.log("HELLOOOOOO" + item1Emotion)

//         console.log("EEEEK " + input)

//         // console.log(Object.values(data)[0]["entry"]["reason"])
//         // global.item1Emotion = Object.values(data)[numEntries-1]["entry"]["feeling"]
//         // global.item1Reason = Object.values(data)[numEntries-1]["entry"]["reason"]
//         // global.item1Mood = Object.values(data)[numEntries-1]["entry"]["mood"]
//         // global.item1Time = Object.values(data)[numEntries-1]["entry"]["time"]
//         // global.item1Time = Moment(global.item1Time).format('D MMM YYYY - h:mma ')
//         // global.item1Image = getImage(global.item1Emotion)


//         switch(input){
//             // case 'item1Emotion': return Object.values(data)[numEntries-1]["entry"]["feeling"]
//             // case 'item1Reason': return Object.values(data)[numEntries-1]["entry"]["reason"]
//             // case 'item1Mood': return Object.values(data)[numEntries-1]["entry"]["mood"]
//             // case 'item1Time': return Object.values(data)[numEntries-1]["entry"]["time"]
//             // case 'item1Image': return item1Image = getImage(item1Time)

//             case item1Emotion: return 'Hello'
//             case item1Reason: return 'Hello'
//             case item1Mood: return 'item1Moods'
//             case item1Time: return 'item1Times'
//             case item1Image: return 'item1Images'

//         }
//         // item1Reason = Object.values(data)[numEntries-1]["entry"]["reason"]
//         // item1Mood = Object.values(data)[numEntries-1]["entry"]["mood"]
//         // item1Time = Object.values(data)[numEntries-1]["entry"]["time"]
//         // item1Time = Moment(global.item1Time).format('D MMM YYYY - h:mma ')
//         // item1Image = getImage(global.item1Emotion)


//         // item2Emotion = Object.values(data)[numEntries-2]["entry"]["feeling"]
//         // item2Reason = Object.values(data)[numEntries-2]["entry"]["reason"]
//         // item2Mood = Object.values(data)[numEntries-2]["entry"]["mood"]
//         // item2Time = Object.values(data)[numEntries-2]["entry"]["time"]

//         // item2Time = Moment(item2Time).format('D MMM YYYY - h:mma ')
//         // item2Image = getImage(item2Emotion)

//     })
// }

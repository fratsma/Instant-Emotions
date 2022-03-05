import React from 'react';
import Screen from '../components/Screen';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableHighlight } from 'react-native';
import { getDatabase, ref, onValue} from "firebase/database";
import colours from '../config/colours';
import App from '../App';


function getData(props){
    const db = getDatabase();
    const getEmotions = ref(db, 'users/' + global.uid);
    onValue(getEmotions, (snapshot)=>{
        var data = snapshot.val();

        for (const value of Object.values(data)) {
            console.log(value["entry"]["feeling"])
          }

        console.log(Object.values(data)[0]["entry"]["reason"])
    })
}

function Analytics(props) {
    return (
        <Screen>
            <Text style={styles.mainText}>
                Instant Emotions
            </Text>
            <Button title='heek' onPress={getData}/>
        </Screen>
    );
}


const styles = StyleSheet.create({
    mainText:{
        fontSize: 40, 
        paddingTop: 10,
        fontWeight: 'bold', 
        textAlign: 'center',
        color: colours.danger,
        // fontFamily: 'Arial-BoldMT'
        // fontFamily: 'Helvetica Neue'
        fontFamily: 'Kohinoor Bangla'
        
    },
})

export default Analytics;
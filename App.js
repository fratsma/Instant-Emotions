// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import AppHome from './screens/AppHome';
import React, {useState} from "react";
import Formiktest from './screens/Formiktest';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import UserLogin from './screens/UserLogin';
// import { registerRootComponent } from 'expo';
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import Analytics from "./screens/Analytics";
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from "./navigation/AuthNavigator";
import AppNavigator from "./navigation/AppNavigator";





const firebaseConfig = {
  apiKey: "AIzaSyDWMBAt8RLazzPnBxeWbg6ACFtDeZxGqL4",
  authDomain: "instant-emotions-947f1.firebaseapp.com",
  projectId: "instant-emotions-947f1",
  storageBucket: "instant-emotions-947f1.appspot.com",
  messagingSenderId: "771074449430",
  appId: "1:771074449430:web:4d697bd6012c98966dd537",
  databaseURL: "https://instant-emotions-947f1-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    console.log("SIGNED IN")
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });


onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    global.uid = uid
    console.log(user.uid)
  } else {
    // User is signed out
    // ...
    console.log("error")
  }
});




// if(!firebaseConfig.apps.length){
//   initializeApp(firebaseConfig)
// }



  

export default function App() {
  return(
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>

    


)
  // return<Formiktest/>
  // return <Text>Hey</Text>
}
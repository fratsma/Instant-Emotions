import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AdvancedAnalytics from "../screens/AdvancedAnalytics";
import Analytics from "../screens/Analytics";
import Formiktest from "../screens/Formiktest";
import HelpMe from "../screens/HelpMe"
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import colours from "../config/colours";


const Tab = createBottomTabNavigator();

function forceUpdate(){
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
    
}

const AppNavigator = () => (
    <Tab.Navigator
    // inactiveColor="#2a475e"
    barStyle={{color: colours.blue }}
    
    
    screenOptions={{
        tabBarStyle: { position: 'absolute', bottom: 0, backgroundColor: colours.lightblue },
        tabBarLabelStyle: { color: "#3f3f3f", fontSize: 12 },
        headerShown: false,
        // lazy: true
      }}
      >
        <Tab.Screen 
        name="Home" 
        component={Formiktest}
        options={{
            tabBarIcon: () => <AntDesign name="plus" size={24} color="#3f3f3f" />
            
        }} />
        <Tab.Screen name="Daily View" component={Analytics} 
        options={{
            tabBarIcon: () => <MaterialIcons name="calendar-today" size={24} color="#3f3f3f" />
            
        }} />
        <Tab.Screen name="Analytics" component={AdvancedAnalytics} 
        options={{
            tabBarIcon: () => <Ionicons name="analytics" size={24} color="#3f3f3f" />
            
        }}/>



            
        </Tab.Navigator>
    )

export default AppNavigator;
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AdvancedAnalytics from "../screens/AdvancedAnalytics";
import Analytics from "../screens/Analytics";
import Formiktest from "../screens/Formiktest";
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
    screenOptions={{
        headerShown: false,
        // lazy: true
      }}>
        <Tab.Screen 
        name="Home" 
        component={Formiktest}
        options={{
            tabBarIcon: () => <AntDesign name="plus" size={24} color="black" />
            
        }} />
        <Tab.Screen name="Daily View" component={Analytics} 
        options={{
            tabBarIcon: () => <MaterialIcons name="calendar-today" size={24} color="black" />
            
        }} />
        <Tab.Screen name="Analytics" component={AdvancedAnalytics} 
        options={{
            tabBarIcon: () => <Ionicons name="analytics" size={24} color="black" />
            
        }}/>
    </Tab.Navigator>
)

export default AppNavigator;
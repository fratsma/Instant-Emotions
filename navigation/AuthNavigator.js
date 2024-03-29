import { createStackNavigator } from '@react-navigation/stack';


import AdvancedAnalytics from "../screens/AdvancedAnalytics";
import Analytics from "../screens/Analytics";
import Formiktest from "../screens/Formiktest";

import HelpMe from "../screens/HelpMe"
import React from 'react';
import colours from '../config/colours';

const Stack = createStackNavigator

const AuthNavigator = () =>(
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Formiktest}/>
        <Stack.Screen name="Daily View" component={Analytics}/>
        <Stack.Screen name="Analytics" component={AdvancedAnalytics}/>
        {/* <Stack.Screen name="Help" component={HelpMe}/> */}
    </Stack.Navigator>
)

export default AuthNavigator;
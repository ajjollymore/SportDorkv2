import { View, Text } from 'react-native'
import React from 'react'
import BetScreen from './Screens/BetScreen'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import BottomTabs from './Components/BottomTabs'
const Stack = createStackNavigator();
const Index = () => {
  return (
        <Stack.Navigator>
            
            <Stack.Screen name = "BetScreen" component={BetScreen}/>

        </Stack.Navigator>
  )
}

export default Index
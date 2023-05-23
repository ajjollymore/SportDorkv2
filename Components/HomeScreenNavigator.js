import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import MavGameCards from '../Screens/MavGameCards'
import BetScreen from '../Screens/PostSwipeBets'
import MajorityMinority from '../Screens/MajorityMinority'
import SportSummaryScreen from '../Screens/SportSummaryScreen'
const HomeScreenNavigator = () => {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'}
    }
    }
    >
        <Stack.Screen name = "HomeStack" component={HomeScreen} />
        <Stack.Screen name = "MavGameCards" component={MavGameCards}/>
        <Stack.Screen name = "MajorityMinority" component={MajorityMinority}/>
        <Stack.Screen name = "SportSummaryScreen" component={SportSummaryScreen}/>
    </Stack.Navigator>
  )
}

export default HomeScreenNavigator
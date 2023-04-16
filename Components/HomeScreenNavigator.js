import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import MavGameCards from '../Screens/MavGameCards'

const HomeScreenNavigator = () => {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false
    }
    }
    >
        <Stack.Screen name = "HomeStack" component={HomeScreen} />
        <Stack.Screen name = "MavGameCards" component={MavGameCards}/>
    </Stack.Navigator>
  )
}

export default HomeScreenNavigator
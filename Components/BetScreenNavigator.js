import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SportsBetSummary from '../Screens/SportsBetSummary';
import BetScreen from '../Screens/PostSwipeBets';
import MavGameCards from '../Screens/MavGameCards';
import DetailedBetBreakdown from './DetailedBetBreakdown';

const BetScreenNavigator = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: 'white'},
        detachPreviousScreen: true
    }}
    >
        <Stack.Screen name = "SportsBetSummary" component={SportsBetSummary}/>
        <Stack.Screen name = "PostSwipeBets" component={BetScreen}/>
        <Stack.Screen name = "DetailedBetBreakdown" component={DetailedBetBreakdown}/>
    </Stack.Navigator>
  )
}

export default BetScreenNavigator

const styles = StyleSheet.create({})
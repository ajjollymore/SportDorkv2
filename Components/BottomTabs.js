import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import HomeScreen from '../Screens/HomeScreen';
import MyBets from './MyBets/MyBets';
import Sports from '../Screens/SportsScreen';
import Learn from '../Screens/LearnScreen';
const BottomTabs = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
        <Tab.Screen name = "Home" component = {HomeScreen}/>
        <Tab.Screen name = "My Bets" component={MyBets}/>
        <Tab.Screen name = "Sports" component={Sports}/>
        <Tab.Screen name = "Learn" component={Learn}/>
    </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})
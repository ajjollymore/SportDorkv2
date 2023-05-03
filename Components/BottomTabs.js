import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import MavGameCards from '../Screens/MavGameCards';
import HomeScreen from './HomeScreen';
import MajorityMinority from '../Screens/MajorityMinority'
import Sports from '../Screens/SportsScreen';
import Learn from '../Screens/LearnScreen';
import HomeScreenNavigator from './HomeScreenNavigator';

const BottomTabs = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={
        {
            tabBarStyle:{
                width: "90%",
                alignSelf: 'center',
                marginBottom: 5,
                borderRadius: 10,
                elevation: 10,
                shadowColor: 'black',
            },
            headerLeft: () => (
            <View>

                <View style = {{width: 50, height: 20, marginLeft: 10, marginBottom: 20}}>
                        <View style ={{width: 30, height: 3, backgroundColor: 'white', marginVertical: 3, borderRadius: 2}}/>
                        <View style ={{width: 30, height: 3, backgroundColor: 'white', marginVertical: 3, borderRadius: 2}}/>
                        <View style ={{width: 20, height: 3, backgroundColor: 'white', marginVertical: 3, borderRadius: 2}}/>
                </View>
            </View>),
            headerRight: () => (
                <View style = {{flexDirection: 'row', marginRight:10, marginBottom: 10}}>
                    <Text style ={{textAlignVertical: 'center', textAlign: 'center', marginRight: 7, color: 'white'}}>49.99</Text>
                    <View style = {{width: 40,height: 40, backgroundColor: 'white', borderRadius: 40}}/>
                </View>
            ),
            headerTitle: '',
            headerStyle: {
                backgroundColor: '#483078'
            }
        }
    }
    sceneContainerStyle ={{backgroundColor: 'white'}}
    >
        <Tab.Screen name = "Home" component = {HomeScreenNavigator}/>
        <Tab.Screen name = "My Bets" component={MajorityMinority}/>{/*make PostSwipeBets*/ }
        <Tab.Screen name = "Sports" component={Sports}/>
        <Tab.Screen name = "Learn" component={Learn}/>
    </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})
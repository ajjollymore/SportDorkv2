import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import SportsScreen from '../Screens/SportsScreen'
import Learn from '../Screens/LearnScreen';
import HomeScreenNavigator from './HomeScreenNavigator';
import SportsBetSummary from '../Screens/SportsBetSummary';
import BetScreenNavigator from './BetScreenNavigator';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { RESET_REDUX_ACTION } from '../redux/actions';
const BottomTabs = () => {
    const navigation = useNavigation()
    const Tab = createBottomTabNavigator();
    const dispatch = useDispatch()
  return (
    <Tab.Navigator
    screenOptions={
        {
            unmountOnBlur:true,
            tabBarStyle:{
                width: '96%',
                marginBottom: 5,
                borderRadius: 20,
                elevation: 10,
                shadowColor: 'black',
                position: 'absolute',
                marginLeft: '2%'
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
                    <Text style ={{textAlignVertical: 'center', textAlign: 'center', marginRight: 7, color: 'white'}}>$49.60</Text>
                    <Image source={require('../assets/icons/logan-face.jpg')} resizeMode='contain' style = {{width: 40,height: 40, backgroundColor: 'white', borderRadius: 40}}/>
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
        <Tab.Screen name = "Home" component = {HomeScreenNavigator} options={{tabBarIcon: ()=><Image source={require('../assets/icons/bottomTabs/coolicon.png')} resizeMode='contain' style = {{width: 30, height: 30}}/>}}
        listeners ={({navigation}) => ({
            tabPress:e =>{
                e.preventDefault()
                navigation.navigate("Home", {screen: 'HomeScreen'})
            }
        })}
        />
        <Tab.Screen name = "My Bets" component = {BetScreenNavigator} options={{tabBarIcon: () => <Image source={require('../assets/icons/bottomTabs/Newspaper.png')} resizeMode='contain' style = {{width: 30, height: 30}}/>}}
        listeners ={({navigation}) => ({
            tabPress:e =>{
                e.preventDefault()
                navigation.navigate("My Bets", {screen: 'SportsBetSummary'})
            }
        })}
        />
        <Tab.Screen name = "Sports" component={SportsBetSummary} options={{tabBarIcon: () => <Image source={require('../assets/icons/bottomTabs/Sports.png')} resizeMode='contain' style = {{width: 30, height: 30}}/>}} listeners={{tabPress: e =>{
            e.preventDefault()
        }}}/>
        <Tab.Screen name = "Learn" component={Learn} options={{tabBarIcon: () => (<Image source={require('../assets/icons/bottomTabs/brain.png')} resizeMode='contain' style = {{width: 30, height: 30}}/>) }} listeners={{tabPress: e =>{
            e.preventDefault()
        },tabLongPress: e => {
            dispatch(RESET_REDUX_ACTION())
            navigation.navigate("Home", {screen: 'HomeScreen'})
        }}}/>
    </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})
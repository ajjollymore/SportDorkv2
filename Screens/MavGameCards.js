import { View, Text } from 'react-native'
import React, { useCallback } from 'react'
import {useNavigation} from '@react-navigation/native'
import { StyleSheet } from 'react-native';
import Deck from '../Components/BetScreen/Deck';
import BottomBar from '../Components/BetScreen/BottomBar';
import * as SplashScreen from 'expo-splash-screen'
SplashScreen.preventAutoHideAsync();
const MavGameCards = () => {
    const navigation = useNavigation();
  return (
    <View style = {styles.container}>
        <View style = {styles.timer}>
            <Text style = {[{color: "#FF5E5E", bottom: 2},{fontFamily: 'scoreboard', fontSize: 49,fontWeight: "600"} ]}>00:00</Text>
        </View>
        <Deck/>
        <BottomBar/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 20,
    },
    timer:{
        width:131,
        height: 51,
        backgroundColor: 'black',
        alignItems: 'center',
    }
})
export default MavGameCards
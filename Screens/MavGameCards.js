import { View, Text, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import {useNavigation} from '@react-navigation/native'
import { StyleSheet } from 'react-native';
import Deck from '../Components/BetScreen/Deck';
import BottomBar from '../Components/BetScreen/BottomBar';
import * as SplashScreen from 'expo-splash-screen'
import BetCountdown from '../Components/BetScreen/BetCountdown';
import { AntDesign } from '@expo/vector-icons';
SplashScreen.preventAutoHideAsync();
const MavGameCards = ({route}) => {
  const topTimer = (route.params.topTimer)? route.params.topTimer:60;
    const navigation = useNavigation();
  return (
    <View style = {styles.container}>
      <TouchableOpacity onPress={() =>{navigation.push("HomeStack")}} style = {{width: 50, height: 50, marginLeft: 20, position:'absolute', left: 0, top: 18}}>
      <AntDesign name="arrowleft" size={24} color="#"/>
      </TouchableOpacity>
      <View style ={styles.margins}>
        <BetCountdown initialSeconds={topTimer}/>
      </View>
      <View style ={styles.margins}>
        <Deck/>
      </View>
      <View style = {styles.margins}>
        <BottomBar/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    margins:{
      marginVertical: 5
    }

})
export default MavGameCards
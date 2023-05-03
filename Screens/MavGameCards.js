import { View, Text } from 'react-native'
import React, { useCallback } from 'react'
import {useNavigation} from '@react-navigation/native'
import { StyleSheet } from 'react-native';
import Deck from '../Components/BetScreen/Deck';
import BottomBar from '../Components/BetScreen/BottomBar';
import * as SplashScreen from 'expo-splash-screen'
import BetCountdown from '../Components/BetScreen/BetCountdown';
SplashScreen.preventAutoHideAsync();
const MavGameCards = () => {
    const navigation = useNavigation();
  return (
    <View style = {styles.container}>
        <BetCountdown initialSeconds={60}/>
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

})
export default MavGameCards
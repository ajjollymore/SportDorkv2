import { View, Text } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import { StyleSheet } from 'react-native';
import Deck from '../Components/BetScreen/Deck';
import BottomBar from '../Components/BetScreen/BottomBar';
const BetScreen = () => {
    const navigation = useNavigation();
  return (
    <View style = {styles.container}>
        <View style = {styles.timer}/>
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
        marginBottom: 20
    },
    timer:{
        width:131,
        height: 51,
        backgroundColor: 'black'
    }
})
export default BetScreen
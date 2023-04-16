import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TopHeader from '../Components/MyBets/TopHeader'
import MyBets from '../Components/MyBets/MyBets'
import CurrentStatus from '../Components/MyBets/CurrentStatus'
const BetScreen = () => {
  return (
    <View style = {styles.container}>
      <TopHeader/>
      <CurrentStatus/>
      <MyBets/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
export default BetScreen
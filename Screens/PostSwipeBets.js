import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import TopHeader from '../Components/MyBets/TopHeader'
import MyBets from '../Components/MyBets/MyBets'
import CurrentStatus from '../Components/MyBets/CurrentStatus'
const BetScreen = ({route,navigation}) => {
  return (
    <SafeAreaView style = {styles.container}>
      <TopHeader game ={route.params.leagueId}/>
      <CurrentStatus/>
      <MyBets game={route.params.leagueId}/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  }
})
export default BetScreen
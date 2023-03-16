import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const Deck = () => {
  return (
    <View style = {styles.container}>
    
      <View style = {styles.deck}>
        <Card/>
      </View>
    </View>
  )
}

export default Deck

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    deck: {
        backgroundColor: 'grey',
        height: 400,
        width: 400*0.71,
    }
})
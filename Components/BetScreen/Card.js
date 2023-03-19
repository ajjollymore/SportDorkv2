import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View style = {styles.container}>
        <View style ={styles.topBar}>
        </View>
        <View style ={styles.image}/>
        <View style = {styles.text}/>
    </View>
  )
}

const styles = StyleSheet.create({
        container: {
            alignSelf:'center',
            width: 400*0.71,
            height: 380,
            backgroundColor: 'red',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            borderRadius: 20,
            elevation: 7,
        },
        topBar:{
            width: '90%',
            height: 63,
            backgroundColor: 'green',
            flexDirection: 'row'
        },
        image:{
            height: 240,
            width: 240,
            backgroundColor: 'blue'
        },
        text:{
            width: 240,
            height: 200/4,
            backgroundColor: 'yellow'
        }
    })
export default Card
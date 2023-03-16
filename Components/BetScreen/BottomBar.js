import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BottomBar = () => {
  return (
    <View style = {styles.container}>
        <View style = {styles.buttons}/>
        <View style = {styles.middleButtonContainer}>
            <View style ={styles.middleButtonTop}/>
            <View style = {styles.middlePaneBottom}/>
        </View>
        <View style = {styles.buttons}/>
    </View>
  )
}

export default BottomBar

const styles = StyleSheet.create({
    container:{ 
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100,
        width: 400*0.71
    },
    buttons:{
        backgroundColor: 'green',
        alignSelf: 'center',
        height: 90,
        width: 90,
        borderRadius: 100
    },
    middleButtonContainer:{
        height: 90,
        width: 90,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    middleButtonTop:{
        width: 47,
        height: 47,
        backgroundColor: 'blue',
        borderRadius: 100
    },
    middlePaneBottom:{
        backgroundColor: 'gray',
        width: 80,
        height: 30,
        borderRadius: 10
    }
})
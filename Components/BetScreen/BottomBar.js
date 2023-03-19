import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { BUTTON_PRESSED } from '../../redux/actionTypes';

const BottomBar = () => {
    const dispatch = useDispatch();
  return (
    <View style = {styles.container}>
        <TouchableOpacity onPress={() => {dispatch({type: BUTTON_PRESSED, payload: 2})}}>
            <View style = {styles.leftButton}/>
        </TouchableOpacity>
        <View style = {styles.middleButtonContainer}>
            <View style ={styles.middleButtonTop}/>
            <View style = {styles.middlePaneBottom}/>
        </View>
        <TouchableOpacity onPress={() => {dispatch({type: BUTTON_PRESSED, payload: 1})}}>
            <View style = {styles.rightButton}/>
        </TouchableOpacity>
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
    leftButton:{
        backgroundColor: 'green',
        alignSelf: 'center',
        height: 90,
        width: 90,
        borderRadius: 100
    },
    rightButton:{
        backgroundColor: 'blue',
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
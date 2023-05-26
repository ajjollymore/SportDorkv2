import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BUTTON_PRESSED_ACTION } from '../../redux/Index'
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import { Montserrat_600SemiBold } from '@expo-google-fonts/montserrat'
import { Image } from 'react-native'
const BottomBar = () => {
    const dispatch = useDispatch();
        const data = useSelector(state=>state.decks[state.currentDeck])
    const curCard = useSelector(state=>state.currentCard)
    const opacity = useSelector(state => state.cardOpacity)
    let [fontsLoaded] = useFonts({
        Montserrat_600SemiBold,
        Poppins_600SemiBold,
    })
    if(!fontsLoaded){
        return null
    }
    return (
      <View style = {styles.container}>
          <TouchableOpacity onPress={() => {dispatch(BUTTON_PRESSED_ACTION(2))}}>
            <View style = {[{height: 90, width: 90, borderRadius: 90,borderWidth:4, borderColor: "#FF5E51",justifyContent: 'center', alignItems: 'center'},(opacity<0)?{backgroundColor: `rgba(255,226,225,${opacity*-1})`}:{}]}>
                <Text style ={{color: '#FF5E51', fontFamily: 'Poppins_600SemiBold', fontSize: 30}}>NO</Text>
                <Text style = {{color: '#ababab', fontSize: 10, position: 'absolute', bottom: 10, fontFamily: 'Poppins_600SemiBold'}}>{(data)?(data.oddsData[curCard][0]*0.2).toLocaleString('en-US',{style:'currency',currency:'USD'}):"0.31"}</Text>
            </View>
          </TouchableOpacity>
          <View style = {styles.middleButtonContainer}>
              <View>
                <View style ={{width: 47, height: 47, borderRadius: 47, borderWidth: 4, borderColor: '#07A6FF', justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={require('../../assets/Cards/BottomBar/Vector.png')} resizeMode='stretch' style = {{width: 25,height: 25, bottom:0.8, left: 0.0}}/>
                </View>
              </View>
              <View style = {{width: 80,height: 30,borderRadius: 10, backgroundColor: '#483078', borderWidth: 4, borderColor: '#DDDDDD', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Text style = {{color: 'white',fontFamily: 'Montserrat_600SemiBold', alignSelf:'center', fontSize: 15, fontWeight: 'bold'}}>$0.20</Text>

              </View>
          </View>
          <TouchableOpacity onPress={() => {dispatch(BUTTON_PRESSED_ACTION(1))}}>
              <View style = {[{height: 90, width: 90, borderRadius: 90,borderWidth:4, borderColor: "#00D387", justifyContent: 'center', alignItems: 'center'},(opacity>0)?{backgroundColor: `rgba(226,255,225,${opacity})`}:{}]}>
                <Text style = {{color: '#00D387', fontFamily: 'Poppins_600SemiBold', fontSize: 30}}>YES</Text>
                <Text style = {{color: '#ababab', fontSize: 10, position: 'absolute', bottom: 10, fontFamily: 'Poppins_600SemiBold'}}>{(data)?(data.oddsData[curCard][1]*0.2).toLocaleString('en-US',{style:'currency',currency:'USD'}):"0.28"}</Text>
                </View>
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
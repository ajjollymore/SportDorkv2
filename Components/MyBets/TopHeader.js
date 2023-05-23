import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReturnArrow from '../returnArrow'
import { useSelector } from 'react-redux'
import { Montserrat_600SemiBold, useFonts } from '@expo-google-fonts/montserrat'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const TopHeader = ({game}) => {
    const navigation = useNavigation()
    const curDeck = useSelector(state => state.decks[game])
    let [fontsLoaded] = useFonts({
        Montserrat_600SemiBold
    })
    if(!fontsLoaded){
        return null
    }
  return (
    <View style = {styles.container}>
        <TouchableOpacity onPress={() => { navigation.goBack(); } } style={{zIndex: 999, width: 50, height: 50, marginLeft: 20, position: 'absolute', left: 0, top: 18 }}>
      <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
        <View style = {styles.subCont}>
            <View>
                <Image source = {curDeck.teamLogos[0]}style = {styles.picture} resizeMode='contain' />
                    <Text style = {{alignSelf: 'center', fontFamily: 'Montserrat_600SemiBold', color: '#ABABAB', fontSize: 10, textAlign: 'center', marginLeft: -5}}>49 - 11</Text>
            </View>
            <View style = {{marginTop: 15}}>
                <Text style = {{fontFamily: 'Montserrat_600SemiBold', color: '#2d2d2d'}}>84 - 77</Text>
                <Text style = {{fontFamily: 'Montserrat_600SemiBold', color: '#ababab', fontSize: 9, alignSelf: 'center'}}>{(curDeck.time)?curDeck.time:"Q3 2:52"}</Text>
            </View>
            <View>
            <Image source = {curDeck.teamLogos[1]}style = {styles.picture} resizeMode='contain'/>
                    <Text style = {{alignSelf: 'center',color: '#ABABAB', fontFamily: 'Montserrat_600SemiBold', fontSize: 10, textAlign: 'center'}}>49 - 11</Text>
            </View>
        </View>
    </View>
  )
}

export default TopHeader

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    picture: { 
        height: 50,
        width: 50,
    },
    subCont: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})
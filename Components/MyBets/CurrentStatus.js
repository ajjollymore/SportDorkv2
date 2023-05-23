import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts, Montserrat_600SemiBold} from '@expo-google-fonts/montserrat'
import { AntDesign } from '@expo/vector-icons'

const CurrentStatus = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  })
  if(!fontsLoaded){
    return null
  }
  return (
    <View style = {styles.container}>
      <View style = {styles.bar}>
        <Text style = {{alignSelf: 'center', marginLeft: 7, fontFamily: 'Montserrat_600SemiBold'}}>Current Status</Text>
        <View style ={{alignSelf: 'center', position: 'absolute', right: 0, marginRight: 7, flexDirection: 'row'}}>
        <Text style = {{ fontFamily: 'Montserrat_600SemiBold'}}>$5.00</Text>
        <AntDesign name="arrowright" size={20} color="black" style ={{marginHorizontal: 2}}/>
        <Text style = {{fontFamily: 'Montserrat_600SemiBold', color: '#4eb100'}}>$7.25  </Text>
        </View>

      </View>
    </View>
  )
}

export default CurrentStatus

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginVertical: 10
    },
    bar:{
        width: 340,
        height: 60,
        flexDirection: 'row',
        borderRadius: 7,
        elevation: 7,
        shadowOpacity: 5,
        backgroundColor: 'white',
    }

})
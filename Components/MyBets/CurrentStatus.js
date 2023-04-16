import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CurrentStatus = () => {
  return (
    <View style = {styles.container}>
      <View style = {styles.bar}>
        <Text style = {{alignSelf: 'center', marginLeft: 7}}>Current Status</Text>
        <Text style = {{alignSelf: 'center', position: 'absolute', right: 0, marginRight: 7}}>$0 {'->'} $100 </Text>
      </View>
    </View>
  )
}

export default CurrentStatus

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 10
    },
    bar:{
        width: 350,
        height: 60,
        flexDirection: 'row',
        borderRadius: 7,
        elevation: 7,
        shadowOpacity: 5,
        backgroundColor: 'white',
    }

})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TopHeader = () => {
  return (
    <View style = {styles.container}>
        <View style = {styles.subCont}>
            <View>
                <View style = {styles.picture}/>
                    <Text style = {{alignSelf: 'center'}}>49 - 11</Text>
            </View>
            <View style = {{marginTop: 15}}>
                <Text>84 - 77</Text>
            </View>
            <View>
                <View style = {styles.picture}/>
                    <Text style = {{alignSelf: 'center'}}>49 - 11</Text>
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
        backgroundColor: 'red'
    },
    subCont: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})
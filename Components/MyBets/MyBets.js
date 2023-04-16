import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native'

const MyBets = () => {
  const decks = [{
    id: 0,
    userData: [1,-1,-1,1,1],
    betData: [1,-1,0,0,-1],
    betamt: 3.00
  },
  {
    id: 1,
    userData: [1,-1,-1,1,1],
    betData: [1,-1,0,0,-1],
    betamt: 4.00
  },
  {
    id: 2,
    userData: [1,-1,-1,1,1],
    betData: [1,-1,0,0,-1],
    betamt: 2.25
  },
  {
    id: 3,
    userData: [1,-1,-1,1,1],
    betData: [1,-1,0,0,-1],
    betamt: 2.25
  }]
  const topElementRadius = (index) => {
    out = {}
    if(index ==0) out = {borderTopStartRadius: 10, borderTopEndRadius: 10}
    if(index == (decks.length -1)) out = {borderBottomStartRadius: 10, borderBottomEndRadius: 10}
    return out
  }
  const BetSingleCell= (props) => {
    return(
    <View style = {{flexDirection: 'row'}}>
      <View style = {[{ width: 230, height: 75, backgroundColor: 'white', justifyContent: 'space-evenly', marginRight: 3, marginVertical: 0.5},topElementRadius(props.index)]}>
              <View style = {{flexDirection: 'row', width:200, marginLeft: 5 }}>
                <Text>Q1: 12:00</Text>
                <TouchableOpacity style ={{right: 0, position: 'absolute'}}>
                <Text style = {{textDecorationLine: 'underline'}}>Details</Text>
                </TouchableOpacity>
              </View>

          <View style = {{width: 200, height: 20, backgroundColor: 'red', marginLeft: 5, borderRadius: 5}}>

          </View>
          <View style = {[{backgroundColor: 'black', opacity: 0.3, width: "90%", position: 'absolute', bottom: 0, alignSelf: 'center'}, (props.index == decks.length-1)? {height:0}:{height:1}]}/>
      </View>
    </View>
    )}  
    const WagerSingleCell = (props) => {
      return(
        <View style = {[{width: 100,height: 75, backgroundColor: 'white', marginVertical: 0.5},topElementRadius(props.index)]}>
          <View style ={[{backgroundColor: 'black', opacity: 0.3, width:"90%",position:'absolute', bottom: 0, alignSelf: 'center'},(props.index == decks.length-1)? {height:0}:{height:1}]}/>
        </View>
      )
    }
  return (
    <View style = {styles.container}>
      <View>
      <Text style = {{fontSize:10}}>Test</Text>
      <View style = {[{flexDirection: 'row'}]}>
        <View style = {styles.leftBox}>
        <FlatList
        data={decks}
        renderItem = {({item}) => <BetSingleCell index = {item.id} data ={item}/>}
        keyExtractor = {item => item.id}
        />
        </View>
        <View style = {[styles.leftBox, {marginLeft: 10}]}>
          <FlatList
          data={decks}
          renderItem = {({item}) => <WagerSingleCell index = {item.id} data ={item}/>}
          keyExtractor = {item => item.id}
          />
        </View>
      </View>
      </View>
    <View>
      
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  activeBets: {
    backgroundColor: 'gray'
  },
  YN: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginLeft: 5
  },
  leftBox:{
    borderRadius: 5,
     elevation: 10,
     backgroundColor: 'white',
  }
})
export default MyBets
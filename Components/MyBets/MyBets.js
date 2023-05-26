import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { Montserrat_600SemiBold, useFonts } from '@expo-google-fonts/montserrat'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
const MyBets = ({game}) => {
  const newBet = useSelector(state=>state.decks[state.currentDeck])
  const decks = [
  {userData: [1,-1,1,-1,-1], betData: [0,-1,-1,1,1], betTime:'Q1: 8:44', id: 1},
  {userData: [1,1,1,1,1], betData: [-1,-1,1,1,1], betTime:'Q1: 2:57', id: 2},
  {userData: [1,1,1,1,1], betData: [1,1,1,1,1], betTime:'Q2: 2:44', id: 3},
  {userData: [1,1,1,1,1], betData: [-1,0,0,0,1], betTime:'Q3: 11:10', id: 4}]
  decks.unshift(newBet);
  const topElementRadius = (index) => {
    let out = {}
    if(index ==0) out = {borderTopStartRadius: 10, borderTopEndRadius: 10}
    if(index == (decks.length -1)) out = {borderBottomStartRadius: 10, borderBottomEndRadius: 10}
    return out
  }
  const getRedGreen = (index) => {
    const userData = decks[index].userData;
    const betData = decks[index].betData;
    let redamt = 0;
    let greenamt = 0;
    for(let i = 0; i < 5;i++){
    if(Math.abs(userData[i]+betData[i])== 2){
      greenamt++;
    }else if(Math.abs(userData[i]+betData[i]) == 0){
      redamt++;
    }}
    return[redamt,greenamt]
  }
  const getBarStatus = (index) =>{
    const [redamt,greenamt]= getRedGreen(index)
    return(
      <View style = {{width: 200, height: 20, marginLeft: 5, borderRadius: 5, flexDirection: 'row', backgroundColor:'#CECECE'}}>
        <View style = {[{height: 20, width: 40*greenamt, backgroundColor:'#4EB100', borderBottomLeftRadius: 5,borderTopLeftRadius: 5}, (greenamt == 5)? {borderBottomRightRadius: 5,borderTopRightRadius: 5}:null]}/>
        <View style = {[{height: 20, width: 40*redamt, backgroundColor:'#F6423A', position: 'absolute', right: 0, borderBottomRightRadius: 5,borderTopRightRadius: 5}, (redamt == 5)? {borderBottomLeftRadius: 5,borderTopLeftRadius: 5}: null]}/>
      </View>
    )
  }
  const BetSingleCell= (indentProps) => {
    console.log(decks)
    const navigation = useNavigation()
    const time = decks[indentProps.index].betTime
    return(
    <View style = {{flexDirection: 'row'}}>
      <View style = {[{ width: 230, height: 75, backgroundColor: 'white', justifyContent: 'space-evenly', marginRight: 3, marginVertical: 0.5},topElementRadius(indentProps.index)]}>
              <View style = {{flexDirection: 'row', width:200, marginLeft: 5 }}>
                <Text style ={{fontFamily: 'Montserrat_600SemiBold', fontSize: 10}}>{(time)? time: 'Q1: 12:00'}</Text>
                <TouchableOpacity onPress={() => {console.log(game);navigation.navigate("DetailedBetBreakdown", {gameId: game})}} style ={{right: 0, position: 'absolute', flexDirection: 'row'}}>
                <Text style = {{textDecorationLine: 'underline', fontFamily: 'Montserrat_600SemiBold', fontSize: 12}}>Details</Text>
                <AntDesign name="caretright" size={12} color="black" style ={{alignSelf: 'center'}} />
                </TouchableOpacity>
              </View>
              {getBarStatus(indentProps.index)}
          <View style = {[{backgroundColor: 'black', opacity: 0.3, width: "90%", position: 'absolute', bottom: 0, alignSelf: 'center'}, (indentProps.index == decks.length-1)? {height:0}:{height:1}]}/>
      </View>
    </View>
    )}  
    const WagerSingleCell = (props) => {
      const [greenamt,redamt] = getRedGreen(props.index)
      return(
        <View style = {[{ justifyContent: 'center',width: 100,height: 75, backgroundColor: 'white', marginVertical: 0.5},topElementRadius(props.index)]}>
          <View style = {{flexDirection: 'row', alignItems: 'center'}}>
          <Text style = {{margin: 5, fontFamily: 'Montserrat_600SemiBold'}}>$1.00</Text>
          <Text style = {[{margin: 5, marginLeft: 10, fontFamily: 'Montserrat_600SemiBold'}, {color: '#4EB100'} ]}>{`${(1+(redamt*0.22-greenamt*0.22)).toLocaleString(undefined, {style: 'currency',currency:'USD'})}`}</Text>
          </View>
          <View style ={[{backgroundColor: 'black', opacity: 0.3, width:"90%",position:'absolute', bottom: 0, alignSelf: 'center'},(props.index == decks.length-1)? {height:0}:{height:1}]}/>
        </View>
      )
    }
    let [fontsLoaded] = useFonts({
      Montserrat_600SemiBold
  })
  if(!fontsLoaded){
      return null
  }
  return (
    <View style = {styles.container}>
      <View>
        <View style ={{flexDirection: 'row', width:335}}>
      <Text style ={{fontSize:10.5, fontFamily: 'Montserrat_600SemiBold', color: '#9E9E9E9E', fontWeight: 'bold'}}>Active Bets</Text>
      <View style = {{flexDirection: 'row', right: 0, position: 'absolute', width: 85}}>
      <Text style ={{fontSize:10.5, fontFamily: 'Montserrat_600SemiBold', color: '#9E9E9E9E', fontWeight: 'bold'}}>Wager</Text>
          <Text style ={{right: 0, position: 'absolute', fontSize:10.5, fontFamily: 'Montserrat_600SemiBold', color: '#9E9E9E9E', fontWeight: 'bold'}}>Return</Text>
      </View>
        </View>
        {/*I am so sorry if anyone ever develops this and it needs to be scrolling... this will need a redesign */}
      <View style = {[{flexDirection: 'row'}]}>
        <View style = {styles.leftBox}>
        <FlatList
        data={decks}
        renderItem = {({item,index}) => <BetSingleCell index = {index} data ={item}/>}
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
    alignSelf: 'center'
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
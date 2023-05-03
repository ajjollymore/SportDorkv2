import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Montserrat_600SemiBold} from '@expo-google-fonts/montserrat';

const refData =[
  [{
  id:0,
  majorityPercent: 64,
  minorityPercent: 36,
  majoritySwipeDecision: -1,
},{
  id:1,
  majorityPercent: 79,
  minorityPercent: 21,
  majoritySwipeDecision: 1,
},{
  id:2,
  majorityPercent: 55,
  minorityPercent: 45,
  majoritySwipeDecision: 1 ,
},{
  id:3,
  majorityPercent: 91,
  minorityPercent: 9,
  majoritySwipeDecision: 1,
},{
  id:4,
  majorityPercent: 67,
  minorityPercent: 33,
  majoritySwipeDecision: 1,
}]
]
const MajoritySingleCell =(props) =>{
  const cardData = useSelector(state => state.decks[0])
  console.log("myCardData: "+ cardData)
  return(  <View style ={{}}>
        <View style = {[{width: 300, height: 85, flexDirection: 'row', backgroundColor: 'white'}]}>
        <View style = {[(cardData.userData[props.index] === props.data.majoritySwipeDecision)?{width:props.data.majorityPercent/100*300}:{width:props.data.minorityPercent/100*300},{ height: 85, backgroundColor: '#5A4585', position: 'absolute', opacity: 0.2}, (cardData.userData[props.index] == -1) ?{left: 0,borderTopRightRadius: 12, borderBottomRightRadius: 12}: {right:0,borderTopLeftRadius: 12, borderBottomLeftRadius: 12}]}/> 
          <View style ={{marginVertical: 10, marginHorizontal: 10, alignSelf: 'center'}}>
            {/* <View style = {{width: 45, height: 45, backgroundColor: 'gray', borderRadius: 50}}/> */}
            <Image source={(cardData.userData[props.index] == -1)? require("../assets/icons/MajorityMinority/MinorityP.png"):require("../assets/icons/MajorityMinority/Minority.png") } resizeMode='stretch'/>
            <Text style ={{textAlign: 'center', marginTop: 10, fontFamily: 'Montserrat_600SemiBold', fontSize: 10, color: '#9D9D9D'}}>{props.data.minorityPercent}%</Text>
          </View>
          <View style = {{alignSelf: 'center'}}>
            <Text style = {{width: 160, textAlign: 'center', marginLeft: 10, fontFamily: 'Montserrat_600SemiBold', fontSize: 12, color: '#2E3A59'}}>{cardData.cardData[props.index].bottomText}.</Text>
          </View>
          <View style ={{marginVertical: 10, marginHorizontal: 10, position: 'absolute', right: 0, alignSelf: 'center'}}>
            <Image source={(cardData.userData[props.index] == -1)? require("../assets/icons/MajorityMinority/Majority.png"):require("../assets/icons/MajorityMinority/MajorityP.png")} resizeMode='stretch'/>
            <Text style ={{textAlign: 'center', marginTop: 5,fontFamily: 'Montserrat_600SemiBold', fontSize: 10, color: '#5a4858'}}>{props.data.majorityPercent}%</Text>
          </View>
        </View>       
      </View>
  )
}
const MajorityMinority = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold
})
if(!fontsLoaded){
    return null
}
  const navigation = useNavigation()
  return (
    <View style ={{alignItems: 'center', backgroundColor: 'white'}}>
      <TouchableOpacity onPress={() =>{navigation.navigate("HomeStack")}} style = {{width: 50, height: 50, marginLeft: 20, position:'absolute', left: 0, top: 18}}>
      <AntDesign name="arrowleft" size={24} color="black"/>
      </TouchableOpacity>
      <View style ={{flexDirection: 'row', marginTop: 20}}>
        <View style ={{alignItems: 'center'}}>
          <Text style = {{fontSize: 19, fontFamily: 'Montserrat_600SemiBold'}}>Complete</Text>
        </View>
      </View>
      <View>
        <Text style ={{marginTop: 10, fontFamily: 'Montserrat_600SemiBold', fontSize: 12}}>Your (5) bets have been successfully placed.</Text>
      </View>
      <View style ={{flexDirection: 'row', marginTop: 10}}>
            <View style = {{flexDirection: 'row', marginHorizontal: 20}}>
                <View style = {{width: 12, height: 12, backgroundColor: '#EEECF3', borderWidth: 2, borderColor:'#5a4585', borderRadius: 15}}/>
                <Text style = {styles.topInfo}>Your Bet</Text>
            </View>
        <View style = {{flexDirection: 'row', marginHorizontal: 20}}>
            <View style = {{flexDirection: 'row'}}>
              <Image source={require('../assets/icons/MajorityMinority/MinorityP.png')} style ={{height: 12, width: 12}} resizeMode= 'stretch'/>
                <Text style = {styles.topInfo}>Minority</Text>
            </View>
        </View>
        <View style = {{flexDirection: 'row', marginHorizontal: 20}}>
            <View style = {{flexDirection: 'row'}}>
              <Image source={require('../assets/icons/MajorityMinority/MajorityP.png')} style ={{height: 13, width: 13}} resizeMode= 'stretch'/>
                <Text style = {styles.topInfo}>Majority</Text>
            </View>
        </View>
      </View>
      <FlatList 
      data={refData[0]}
      renderItem ={({item}) => <MajoritySingleCell index = {item.id} data = {item}/>}
      style = {{backgroundColor: 'white', elevation: 10, marginVertical: 10}}
      />
      <View style ={{width: 120, height: 32, backgroundColor: "#5A4585", marginTop: 3, borderRadius: 7.5}}>
        <Text style = {{color: 'white', textAlign: 'center', textAlignVertical: 'bottom', marginVertical: 5, fontFamily: 'Montserrat_600SemiBold'}}>View All Bets</Text>
      </View>
      </View>
  )
}

export default MajorityMinority

const styles = StyleSheet.create({
  topInfo:{
     fontSize: 10, 
     textAlignVertical: 'center',
     fontFamily: 'Montserrat_600SemiBold',
     color:'#969696'
  }
})
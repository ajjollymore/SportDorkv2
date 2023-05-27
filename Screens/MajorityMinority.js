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
  majoritySwipeDecision: 1,
},{
  id:1,
  majorityPercent: 21,
  minorityPercent: 79,
  majoritySwipeDecision: -1,
},{
  id:2,
  majorityPercent: 55,
  minorityPercent: 45,
  majoritySwipeDecision: 1 ,
},{
  id:3,
  majorityPercent: 9,
  minorityPercent: 91,
  majoritySwipeDecision: -1,
},{
  id:4,
  majorityPercent: 67,
  minorityPercent: 33,
  majoritySwipeDecision: 1,
}]
]
const MajoritySingleCell =(props) =>{
  const index = props.index;
  const cardData = useSelector(state => state.decks[state.currentDeck])
  return(  <View style ={{}}>
        <View style = {[{width: 350, height: 85, flexDirection: 'row', backgroundColor: 'white'},(props.index ==0)?{borderTopRightRadius:25,borderTopLeftRadius:25}:{borderTopRightRadius: 0,borderTopLeftRadius: 0},(props.index == 4)?{borderBottomRightRadius:25,borderBottomLeftRadius:25}:{borderBottomRightRadius:0,borderBottomLeftRadius:0}]}>
        <View style = {[(cardData.userData[props.index] === 1)?[{width:props.data.majorityPercent/100*350},(props.index ==0)?{borderTopRightRadius:25}:{borderTopRightRadius: 0},(props.index == 4)?{borderBottomRightRadius:25}:{borderBottomRightRadius:0}]:[{width:props.data.minorityPercent/100*350},(props.index ==0)?{borderTopLeftRadius:25}:{borderTopLeftRadius: 0},(props.index == 4)?{borderBottomLeftRadius:25}:{borderBottomLeftRadius:0}],{ height: 85, backgroundColor: '#5A4585', position: 'absolute', opacity: 0.2}, (cardData.userData[props.index] == -1) ?{left: 0,borderTopRightRadius: 12, borderBottomRightRadius: 12}: {right:0,borderTopLeftRadius: 12, borderBottomLeftRadius: 12}]}/> 
          <View style ={{marginVertical: 10, marginHorizontal: 10, alignSelf: 'center'}}>
            {/* <View style = {{width: 45, height: 45, backgroundColor: 'gray', borderRadius: 50}}/> */}
            {index ==0?<Text style ={{color: "#5A4585", alignSelf: 'center', fontFamily: 'Montserrat_600SemiBold', fontWeight: 'bold', fontSize: 11, textDecorationLine: 'underline', marginBottom: 3}}>NO</Text>: null}
            <Image source={(cardData.userData[props.index] == -1)? (props.data.majoritySwipeDecision == 1)?require("../assets/icons/MajorityMinority/MinorityP.png"):require("../assets/icons/MajorityMinority/MajorityP.png"):(props.data.majoritySwipeDecision== 1)?require("../assets/icons/MajorityMinority/Minority.png"):require("../assets/icons/MajorityMinority/Majority.png") } resizeMode='stretch'/>
            <Text style ={[{textAlign: 'center', marginTop: 10, fontFamily: 'Montserrat_600SemiBold', fontSize: 10, },(cardData.userData[props.index] == -1)?{color:'#5a4858'}:{color: '#9D9D9D'}]}>{props.data.minorityPercent}%</Text>
          </View>
          <View style = {{alignSelf: 'center'}}>
            <Text style = {{width: 160, marginLeft: 50, fontFamily: 'Montserrat_600SemiBold', fontSize: 12, color: '#2E3A59'}}>{cardData.cardData[props.index].bottomText}.</Text>
          </View>
          <View style ={{marginVertical: 10, marginHorizontal: 10, position: 'absolute', right: 0, alignSelf: 'center'}}>
            {index ==0?<Text style ={{color: "#5A4585", alignSelf: 'center', fontFamily: 'Montserrat_600SemiBold', fontWeight: 'bold', fontSize: 11, textDecorationLine: 'underline', marginBottom: 3}}>YES</Text>: null}
            <Image source={(cardData.userData[props.index] == -1)? (props.data.majoritySwipeDecision == -1)?require("../assets/icons/MajorityMinority/Minority.png"):require("../assets/icons/MajorityMinority/Majority.png"):(props.data.majoritySwipeDecision == -1)?require("../assets/icons/MajorityMinority/MinorityP.png"):require("../assets/icons/MajorityMinority/MajorityP.png")} resizeMode='stretch'/>
            <Text style ={[{textAlign: 'center', marginTop: 5,fontFamily: 'Montserrat_600SemiBold', fontSize: 10, color: '#5a4858'}, (cardData.userData[props.index] == -1)?{color:'#9D9D9D'}:{color: '#5a4858'}]}>{props.data.majorityPercent}%</Text>
          </View>
        </View>       
      </View>
  )
}
const MajorityMinority = () => {
  const currentDeck = useSelector(state => state.decks[state.currentDeck].id);
  console.log(currentDeck)
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold
})
if(!fontsLoaded){
    return null
}
  const navigation = useNavigation()
  return (
    <View style ={{alignItems: 'center', backgroundColor: 'white'}}>
      <TouchableOpacity onPress={() =>{navigation.push("HomeStack")}} style = {{width: 50, height: 50, marginLeft: 20, position:'absolute', left: 0, top: 18}}>
      <AntDesign name="arrowleft" size={24} color="black"/>
      </TouchableOpacity>
      <View style ={{flexDirection: 'row', marginTop: 20}}>
        <View style ={{alignItems: 'center'}}>
          <Text style = {{fontSize: 19, fontFamily: 'Montserrat_600SemiBold'}}>Complete</Text>
        </View>
      </View>
      <View>
        <Text style ={{marginTop: 10, fontFamily: 'Montserrat_600SemiBold', fontSize: 12, color: '#969696'}}>Your (5) bets have been successfully placed.</Text>
      </View>
      <View style ={{flexDirection: 'row', marginTop: 10}}>
            <View style = {{flexDirection: 'row', marginHorizontal: 20}}>
                <View style = {{width: 12, height: 12, backgroundColor: '#EEECF3', borderWidth: 2, borderColor:'#5a4585', borderRadius: 15}}/>
                <Text style = {styles.topInfo}> Your Bet</Text>
            </View>
        <View style = {{flexDirection: 'row', marginHorizontal: 20}}>
            <View style = {{flexDirection: 'row'}}>
              <Image source={require('../assets/icons/MajorityMinority/MinorityP.png')} style ={{height: 12, width: 12}} resizeMode= 'stretch'/>
                <Text style = {styles.topInfo}> Minority</Text>
            </View>
        </View>
        <View style = {{flexDirection: 'row', marginHorizontal: 20}}>
            <View style = {{flexDirection: 'row'}}>
              <Image source={require('../assets/icons/MajorityMinority/MajorityP.png')} style ={{height: 13, width: 13}} resizeMode= 'stretch'/>
                <Text style = {styles.topInfo}> Majority</Text>
            </View>
        </View>
      </View>
      <View style = {{position: 'absolute', width: 340, height: 83*5, top: 105, left: 10, borderRadius: 25,elevation:15,zIndex: -1}}></View>
      <FlatList 
      data={refData[0]}
      renderItem ={({item}) => <MajoritySingleCell index = {item.id} data = {item}/>}
      style = {{marginVertical: 10}}
      />
      <TouchableOpacity onPress={() => {navigation.navigate("My Bets", {screen: 'PostSwipeBets', params:{leagueId:currentDeck}})}}>
      <View style ={{width: 120, height: 32, backgroundColor: "#5A4585", marginTop: 3, borderRadius: 7.5}}>
        <Text style = {{color: 'white', textAlign: 'center', textAlignVertical: 'bottom', marginVertical: 5, fontFamily: 'Montserrat_600SemiBold'}}>View All Bets</Text>
      </View>
      </TouchableOpacity>
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
import { ScrollView, SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Montserrat_600SemiBold,Montserrat_400Regular, useFonts } from '@expo-google-fonts/montserrat'
import ReturnArrow from '../Components/returnArrow'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { SET_DECK_ACTION } from '../redux/actions'
  
const SportsBetsSummarySingleCell = ({value}) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  return(
    
    <View style = {{margin: 4}}>
    <View>
    <TouchableOpacity style ={{width: 320, height: 130, backgroundColor: 'white', borderRadius: 15, elevation: 4, zIndex: 99, flexDirection: 'row', alignSelf: 'center'}} onPress={() => {if(value.isCompleted == 0){dispatch(SET_DECK_ACTION(value.id)); navigation.navigate("Home", {screen: 'MavGameCards',leagueId: value.id})}else{navigation.navigate("PostSwipeBets", {leagueId: value.id})}}}>
        
            <View style = {{justifyContent: 'space-evenly', marginLeft: 10, width: 180}}>
                <View style = {{flexDirection: 'row'}}>
                    <Image source={value.teamLogos[0]} resizeMode='contain' style ={{height: 40, width: 40}}/>
                    <Text style = {{fontFamily: 'Montserrat_400Regular', alignSelf: 'center', marginLeft: 10}}>{value.teams[0]}</Text>
                    <Text style = {{fontFamily: 'Montserrat_400Regular', alignSelf: 'center', position: 'absolute', right: 0, fontWeight: "bold"}}>{value.score[0]}</Text>
                </View>
                <Text style = {{alignSelf: 'flex-start', marginLeft: 25}}>@</Text>
                <View style = {{flexDirection: 'row'}}>
                <Image source={value.teamLogos[1]} resizeMode='contain' style ={{height: 40, width: 40}}/>
                    <Text style = {{fontFamily: 'Montserrat_400Regular', alignSelf: 'center', marginLeft: 10}}>{value.teams[1]}</Text>
                    <Text style = {{fontFamily: 'Montserrat_400Regular', alignSelf: 'center', position: 'absolute', right: 0, fontWeight: "bold"}}>{value.score[1]}</Text>
                </View>
                <Text style ={{fontFamily: 'Montserrat_400Regular', alignSelf: 'baseline', marginLeft: 50, fontSize: 13, color: '#6d6d6d'}}>{(value.time)?value.time:"Q2 1:04"}</Text>
            </View>
            <View style = {{alignSelf: 'center', marginLeft: 30}}>
            </View>
            <Image source = {value.leagueImg} resizeMode='contain' style = {{height: 100, width:100, alignSelf: 'center'}}/>
        
    </TouchableOpacity>
</View>
</View>
  )
}
const getSections = (data) => {
  const out = [{title: 'Live Games', data:[]}, {title: 'Completed Games', data:[]}]
   data.forEach(element => {//iterate over all games and append base on completed status
       if(element.isLive){
         out[0].data.push(element)
       }else if(element.isCompleted){
         out[1].data.push(element)
       }
   });
  return out
}
const SportsBetSummary = () => {
  const gameData = useSelector(state => state.decks)
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_400Regular
  })
  if(!fontsLoaded){
    return null
  }
  const test = getSections(gameData);
  (test)
  return (
    <SafeAreaView>
      <ReturnArrow/>
      <View style ={{alignItems: 'center'}}>
        <Text style = {{color: "#483078", fontWeight: 'bold', fontSize: 20, marginBottom: 17}}>My Bets</Text>
        <SectionList  
        scrollEnabled = {true}
        sections = {test}
        style ={{height: 550}}
        showsVerticalScrollIndicator ={false}
        renderItem={({item}) =>(
          <SportsBetsSummarySingleCell value ={item}/>
        )}
        renderSectionHeader={({section, section: {title}}) => (
          (section.data.length > 0)?
          (<Text style = {{fontFamily: 'Montserrat_600SemiBold', fontSize: 15}}>{title}</Text>): (null)
        )}
        />
        
      </View>
    </SafeAreaView>
  )
}

export default SportsBetSummary

const styles = StyleSheet.create({})
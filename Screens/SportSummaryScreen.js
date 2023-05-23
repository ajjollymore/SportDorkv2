import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ReturnArrow from '../Components/returnArrow'
import { Image } from 'react-native'
import { Touchable } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'
import {useFonts, Montserrat_400Regular} from '@expo-google-fonts/montserrat'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { SET_DECK } from '../redux/actionTypes'
import { SET_DECK_ACTION } from '../redux/actions'
//[cell(game)]
const cellData = [
    [{
        image: require('../assets/Cards/Topbar/toronto-raptors-logo-transparent.png'),
        name: "TOR Raptors",
        score: 84,
        
    }, {
        image: require('../assets/Cards/Topbar/boston-celtics-logo-transparent.png'),
        name: "BOS Celtics",
    score: 77,
}, {id: 0}],
[{
    image: require('../assets/Cards/Topbar/toronto-raptors-logo-transparent.png'),
    name: "TOR Raptors",
    score: 84,
    
}, {
    image: require('../assets/Cards/Topbar/boston-celtics-logo-transparent.png'),
    name: "BOS Celtics",
score: 77,
}, {id: 1}],
[{
    image: require('../assets/Cards/Topbar/toronto-raptors-logo-transparent.png'),
    name: "TOR Raptors",
    score: 84,
    
}, {
    image: require('../assets/Cards/Topbar/boston-celtics-logo-transparent.png'),
    name: "BOS Celtics",
score: 77,
}, {id: 2}],
]
const SportSummaryCell = ({value,index}) => {
    const [timer, setTimer] = useState(30)
    let [fontsLoaded] = useFonts({
            Montserrat_400Regular
    })
    if(!fontsLoaded){
        return null
    }
    const navigation = useNavigation()
    const dispatch = useDispatch()
    return(
        <View style = {{height: 155}}>
            <View>
            <TouchableOpacity onPress={() => {
                navigation.push("MavGameCards", {topTimer: timer});
                dispatch(SET_DECK_ACTION(value.id))
        }} style ={{width: 320, height: 130, backgroundColor: 'white', borderRadius: 15, elevation: 8, zIndex: 99, flexDirection: 'row', alignSelf: 'center'}}>
                    <View style ={{width: 320, height: 130, backgroundColor: 'white', borderRadius: 15, zIndex: 98, flexDirection: 'row', alignSelf: 'center'}}>
                    <View style = {{justifyContent: 'space-evenly', marginLeft: 10, width: 180}}>
                        <View style = {{flexDirection: 'row'}}>
                            <Image source={value.teamLogos[0]} resizeMode='contain' style ={{height: 35, width: 35}}/>
                            <Text style = {{fontFamily: 'Montserrat_400Regular', alignSelf: 'center', marginLeft: 10}}>{value.teams[0]}</Text>
                            <Text style = {{fontFamily: 'Montserrat_400Regular', alignSelf: 'center', position: 'absolute', right: 0, fontWeight: "bold"}}>{value.score[0]}</Text>
                        </View>
                        <Text style = {{alignSelf: 'flex-start', marginLeft: 25}}>@</Text>
                        <View style = {{flexDirection: 'row'}}>
                        <Image source={value.teamLogos[1]} resizeMode='contain' style ={{height: 35, width: 35}}/>
                            <Text style = {{fontFamily: 'Montserrat_400Regular', alignSelf: 'center', marginLeft: 10}}>{value.teams[1]}</Text>
                            <Text style = {{fontFamily: 'Montserrat_400Regular', alignSelf: 'center', position: 'absolute', right: 0, fontWeight: "bold"}}>{value.score[1]}</Text>
                        </View>
                        <Text style ={{fontFamily: 'Montserrat_400Regular', alignSelf: 'baseline', marginLeft: 40, fontSize: 13, color: '#6d6d6d'}}>{(value.time)?value.time:"Q2 1:04"}</Text>
                    </View>
                    <View style = {{alignSelf: 'center', marginLeft: 30}}>
                        
                      <CountdownCircleTimer
                        isPlaying
                        duration={2.5*60}
                        initialRemainingTime={70+index*15}
                        colors={['#FF3C3C', '#510000']}
                        colorsTime={[10,0]}
                        size={90}
                        strokeWidth={7}
                        >
                          {({remainingTime}) => {setTimer(remainingTime); return(<Text style = {{color: '#FF3c3c', fontFamily: 'Montserrat_500Medium', fontSize: 20}}>{`${Math.floor(remainingTime/60)}:${('0'+remainingTime%60).slice(-2)}`}</Text>)}}
                        </CountdownCircleTimer>
                    </View>
                
                </View>
            </TouchableOpacity>
                <View style ={{width: 310, height: 130, backgroundColor: 'white', borderRadius: 15, elevation: 9, position: 'absolute',alignSelf:'center', marginTop:5, zIndex:98}}/>
                <View style ={{width: 300, height: 130, backgroundColor: 'white', borderRadius: 15, elevation: 10, position: 'absolute',alignSelf:'center', marginTop: 10, zIndex: 97}}/>
        </View>
    </View>
    )
}
const isInLeague = (data, league) =>{
    let out = []
    data.forEach(element => {
        if(element.league==league && element.isCompleted== 0){
            out.push(element);
        }
    });
    return out
}
const SportSummaryScreen = ({route, navigation}) => {
    const deckData = useSelector(state => state.decks);
    const deckDataFormat = isInLeague(deckData, route.params.leagueName)
    const leagueImg = [require('../assets/leagueImages/nba.png'),require('../assets/leagueImages/nfl.png'),require('../assets/leagueImages/mlb.png'),require('../assets/leagueImages/nhl.png'),require('../assets/leagueImages/pga.png'),require('../assets/leagueImages/horse.png')]
    console.log(route.leagueId)
   return (
    <View style ={{alignItems: 'center'}}>
        <ReturnArrow/>
        <Image source={leagueImg[route.params.leagueId]} resizeMode='contain' style ={{width:70, height: 70}}/>
        <FlatList
        data={deckDataFormat}
        renderItem={({item, index}) => <SportSummaryCell value={item} index={index}/>}
        style = {{width: 500, marginTop: 10, height: 515,}}
        contentContainerStyle = {{justifyContent: 'space-evenly'}}
        />
    </View>
  )
}

export default SportSummaryScreen

const styles = StyleSheet.create({})
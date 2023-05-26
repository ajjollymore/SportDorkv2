import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { useFonts, Montserrat_500Medium, Montserrat_400Regular} from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';
import MavGameCards from '../Screens/MavGameCards';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { SET_DECK_ACTION } from '../redux/actions';
import { Alert } from 'react-native';

const LeagueData = [
    {id: 0, image: require('../assets/leagueImages/nba.png'),name:'NBA'},
    {id: 1, image: require('../assets/leagueImages/nfl.png'),name:'NFL'},
    {id: 2, image: require('../assets/leagueImages/mlb.png'),name:'MLB'},
    {id: 3, image: require('../assets/leagueImages/nhl.png'),name:'NHL'},
    {id: 4, image: require('../assets/leagueImages/pga.png'),name:'PGA'},
    {id: 5, image: require('../assets/leagueImages/horse.png'),name:'HORSE RACING'},
]
const TopBar = ({value}) => {
    const dispatch = useDispatch();
    const navigation = useNavigation()
    return(
        <View style = {{marginTop: 5, height: 355, width: 350, alignItems: 'center'}}>
                <View style = {{width: 320, height: 133, backgroundColor: 'white', borderRadius: 20, position:'absolute', top: 14,transform:[{scaleX:0.95}], elevation: 10}}>
                </View>
                <View style = {{width: 320, height: 133, backgroundColor: 'white', borderRadius: 20, position:'absolute', top: 7, transform:[{scaleX:0.975}], elevation: 11}}/>
                <TouchableOpacity onPress={() => {if(value.isCompleted == 0){dispatch(SET_DECK_ACTION(value.id)); navigation.navigate("Home", {screen: 'MavGameCards',params:{leagueId: value.id, topTimer: 60}})}else{navigation.navigate("PostSwipeBets", {leagueId: value.id})}}} style ={{width: 320, height: 133, backgroundColor: 'white', borderRadius: 20, position:'absolute', top: 0, elevation: 11, flexDirection: 'row'}}>
            <View style = {{justifyContent: 'space-evenly', marginLeft: 10, width: 180}}>
                <View style = {{flexDirection: 'row'}}>
                    <Image source={value.teamLogos[0]} resizeMode='contain' style ={{height: 40, width: 40}}/>
                    <Text style = {{fontFamily: 'Montserrat_400Regular', alignSelf: 'center', marginLeft: 10}}>{value.teams[0]}</Text>
                    <Text style = {{fontFamily: 'Montserrat_400Regular', alignSelf: 'center', position: 'absolute', right: 0, fontWeight: "bold"}}>{value.score[0]}</Text>
                </View>
                <Text style = {{alignSelf: 'flex-start', marginLeft: 25}}>@</Text>
                <View style = {{flexDirection: 'row'}}>
                <Image source={value.teamLogos[1]} resizeMode='contain' style ={{height: 33, width: 33}}/>
                    <Text style = {{fontFamily: 'Montserrat_400Regular', alignSelf: 'center', marginLeft: 10}}>{value.teams[1]}</Text>
                    <Text style = {{fontFamily: 'Montserrat_400Regular', alignSelf: 'center', position: 'absolute', right: 0, fontWeight: "bold"}}>{value.score[1]}</Text>
                </View>
                <Text style ={{fontFamily: 'Montserrat_400Regular', alignSelf: 'baseline', marginLeft: 40, fontSize: 13, color: '#6d6d6d'}}>{(value.time)?value.time:"Q2 1:04"}</Text>
            </View>
            <View style = {{alignSelf: 'center', marginLeft: 30}}>
            </View>
            <Image source = {value.leagueImg} resizeMode='contain' style = {{height: 100, width:100, alignSelf: 'center'}}/>
    </TouchableOpacity>

            </View>    
        )
}
const LeagueCell = ({index,name}) => {
    const navigation= useNavigation();
    const leagueData = useSelector(state => state.decks);
    
    let gameNums = 0;
    leagueData.forEach(element => {
        if(element.league === name.toUpperCase()&&element.isCompleted==0){
            gameNums++;
        }
    });
    let [fontsLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_400Regular
    })
    if(!fontsLoaded){
        return null
    }
    return(<View style = {{}}>
        <View style ={{width:40, height: 40, borderRadius: 10, backgroundColor: '#483078', position: 'absolute', zIndex: 99, right: 0, opacity:(gameNums == 0)? 0:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style ={{fontFamily: 'Montserrat_500Medium', fontSize: 25, color: 'white'}}>{gameNums}</Text>
        </View>
    <TouchableOpacity onPress={() =>{
        if(name == 'NBA'||name=='NFL')
        navigation.push("SportSummaryScreen", {leagueId: index, leagueName: name})
        else{
        }
        }} style = {{ justifyContent: 'space-evenly',width: 150, height: 150, backgroundColor: 'white', margin: 10, borderRadius: 41, elevation: 10, alignContent: 'center'}}>
    <View>
    <Image source={LeagueData[index].image} style ={[{alignSelf: 'center', width: 110, height: 110,  }, (LeagueData[index].name == 'NHL')? {transform:[{scale: 0.87}]}: null]} resizeMode='contain'/>
        <Text style ={{alignSelf:'center', fontFamily: 'Montserrat_400Regular'}}>{name}</Text>
    </View>
    </TouchableOpacity>
    </View>)
}
const LeaguesList = () => {
    
    return (
            <View style = {{height: 400,alignSelf: 'center'}}>

            <FlatList
            data={LeagueData}
            scrollEnabled = {true}
            side
            showsVerticalScrollIndicator ={false}
            numColumns={2}
            renderItem={({item}) => <LeagueCell index = {item.id} name = {item.name}/>}
            keyExtractor={(item,index)=>item.id}
            />
            </View>
    )
}
const HomeScreen = () => {
    const leagueData = useSelector(state => state.decks);
    const [topBarIndex, setTopBarIndex] = useState(0)
    const AvailibleBets = [
        {id: 0, data: leagueData[0]},
        {id: 1, data: leagueData[1]},
        {id: 2, data: leagueData[2]},
    ];
    const flatListRef = useRef(null)
    const scrollToIndex = () => {
        flatListRef.current.scrollToIndex({index, animated:true });
    }
    let [fontsLoaded] = useFonts({
        Montserrat_500Medium
    })
    if(!fontsLoaded){
        return null
    }
    console.log(leagueData);
return (
    <View style = {{backgroundColor: 'white'}}>
    <Text style = {{fontFamily: 'Montserrat_500Medium', backgroundColor: 'red', width: 65, textAlign: 'center', color: 'white', fontSize: 12, marginLeft: 35, marginVertical: 5, borderRadius: 5,zIndex: 99,}}>BET NOW</Text>
    <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
    <View style = {{justifyContent: 'center', zIndex: 1, flexDirection: 'row'}}>
    <TouchableOpacity style ={{zIndex: 99, position: 'absolute', left: 0, alignSelf: 'center', bottom: '50%'}}>
      <AntDesign name="caretleft" size={15} color="black"/>
    </TouchableOpacity>

    <View style = {{}}>
        <FlatList
        ref={flatListRef}
        data ={AvailibleBets.filter((value) => {return (value.data.isCompleted == 0)})}
        horizontal
        showsHorizontalScrollIndicator = {false}
        renderItem={({item}) => <TopBar value={item.data}/>}
        snapToInterval={350}
        decelerationRate={'fast'}
        style = {{marginTop: 5, height: 165, width: 350}}
        contentContainerStyle= {{}}
        />
        </View>
        
    <View style = {{justifyContent: 'center', position: 'absolute', right: 0, alignSelf: 'center', bottom: '50%'}}>
                    <TouchableOpacity>
                    <AntDesign name="caretright" size={15} color="black"/>
                    </TouchableOpacity>
                </View>
                </View>
    </View>
    <Text style = {{fontSize: 17, marginLeft: 35, marginVertical: 5, fontFamily: "Montserrat_500Medium"}}>LEAGUES</Text>
        <LeaguesList/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    rect: {

    }
})
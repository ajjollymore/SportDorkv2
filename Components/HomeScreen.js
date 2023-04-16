import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { useFonts, Montserrat_500Medium} from '@expo-google-fonts/montserrat';
import { useNavigation } from '@react-navigation/native';
import MavGameCards from '../Screens/MavGameCards';
import { ScrollView } from 'react-native';
import { Image } from 'react-native';
const AvailibleBets = [
    {id: 0},
    {id: 1},
    {id: 2},
    {id: 3}
];
const LeagueData = [
    {id: 0, image: require('../assets/leagueImages/nba.png'),name:'NBA'},
    {id: 1, image: require('../assets/leagueImages/nhl.png'),name:'NHL'},
    {id: 2, image: require('../assets/leagueImages/mlb.png'),name:'MLB'},
    {id: 3, image: require('../assets/leagueImages/nfl.png'),name:'NFL'},
    {id: 4, image: require('../assets/leagueImages/pga.png'),name:'PGA'},
    {id: 5, image: require('../assets/leagueImages/horse.png'),name:'HORSE RACING'},
]
const TopBar = () => {
    return(
        <View style = {{marginHorizontal: 10, height: 160}}>
                <TouchableOpacity>
                <View style = {{width: 320, height: 133, backgroundColor: 'white', borderRadius: 20, position:'absolute', top: 14,transform:[{scaleX:0.95}], elevation: 10}}/>
                <View style = {{width: 320, height: 133, backgroundColor: 'white', borderRadius: 20, position:'absolute', top: 7, transform:[{scaleX:0.975}], elevation: 11}}/>
                <View style = {{width: 320, height: 133, backgroundColor: 'white', borderRadius: 20, elevation: 12}}/>
                </TouchableOpacity>
            </View>    
        )
}
const LeagueCell = (props) => {
    const navigation= useNavigation();
    return(
    <TouchableOpacity onPress={() =>{navigation.navigate("MavGameCards")}} style = {{width: 150, height: 150, backgroundColor: 'white', margin: 10, borderRadius: 41, elevation: 10, alignContent: 'center'}}>
        <Image source={LeagueData[props.index].image} style ={{alignSelf: 'center', resizeMode: 'contain', width: 120, height: 120}}/>
        <Text style ={{alignSelf:'center'}}>{LeagueData[props.index].name}</Text>
    </TouchableOpacity>)
}
const LeaguesList = () => {
    return (
        <View>
            <FlatList
            data={LeagueData}
            scrollEnabled
            numColumns={2}
            renderItem={({item}) => <LeagueCell index = {item.id}/>}
            />
        </View>
    )
}
const HomeScreen = () => {
    const [topBarIndex, setTopBarIndex] = useState(0)
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
return (
    <View style = {{backgroundColor: 'white'}}>
    <Text style = {{fontFamily: 'Montserrat_500Medium', backgroundColor: 'red', width: 65, textAlign: 'center', color: 'white', fontSize: 12, marginLeft: 35, marginVertical: 5}}>BET NOW</Text>
    <View style = {{flexDirection: 'row', alignSelf: 'center'}}>
    <View style = {{justifyContent: 'center'}}>
    <TouchableOpacity>
      <AntDesign name="caretleft" size={20} color="black"/>
    </TouchableOpacity>
    </View>
        <FlatList
        ref={flatListRef}
        data ={AvailibleBets}
        horizontal
        showsHorizontalScrollIndicator = {false}
        renderItem={({item}) => <TopBar/>}
        snapToInterval={320+20}
        decelerationRate={'fast'}
        />
    <View style = {{justifyContent: 'center'}}>
                    <TouchableOpacity>
                    <AntDesign name="caretright" size={20} color="black"/>
                    </TouchableOpacity>
                </View>
    </View>
    <Text style = {{fontSize: 17, marginLeft: 35, marginVertical: 5, fontFamily: "Montserrat_500Medium"}}>LEAGUES</Text>
    <View style = {{alignSelf: 'center'}}>
        <LeaguesList/>
    </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    rect: {

    }
})
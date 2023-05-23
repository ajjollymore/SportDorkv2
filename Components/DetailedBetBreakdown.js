import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopHeader from './MyBets/TopHeader'
import { useSelector } from 'react-redux'
import { Montserrat_600SemiBold, useFonts } from '@expo-google-fonts/montserrat'
const DetailedBetBreakdown = ({route, navigation}) => {
    const gameId = route.params.gameId
    const cellData = useSelector(state => state.decks[gameId])
    const BreakdownSingleCell = ({index}) => {
        const BetCompleteNo = () => {
            let dependantStyleView = {}
            let dependantStyleText = {}
            if(cellData.userData[index] == -1){
                
                console.log(cellData.betData[index]);
                if(cellData.betData[index] == -1){
                dependantStyleView= {
                    backgroundColor: '#EEFFE1',
                    borderColor: '#4EB100',
                    borderWidth: 5
                }
                dependantStyleText={
                    color: '#4EB100',
                    fontWeight: 'bold'
                }}else if(cellData.betData[index] == 1){
                    dependantStyleView= {
                        backgroundColor: '#FFEEE1',
                        borderColor: '#FF3c3c',
                        borderWidth: 5
                    }
                    dependantStyleText={
                        color: '#ff3c3c',
                        fontWeight: 'bold'
                    }}
                
                if(cellData.betData[index] == 0){
                    dependantStyleView= {
                        backgroundColor: '',
                        borderColor: '#5A4585',
                        borderWidth: 5
                    }
                    dependantStyleText={
                        color: '#5A4585',
                        fontWeight: 'bold'
                    }
                }}
            
            return(
                <View style = {[{width: 40, height: 40, borderRadius: 50, margin:  10, justifyContent: 'center', alignItems: 'center', borderWidth: 1.5, borderColor: 'grey'}, dependantStyleView]}>
                    <Text style ={[{color: 'grey', fontSize: 10, fontFamily: 'Montserrat_600SemiBold'}, dependantStyleText]}>NO</Text>
                </View>
            )
        }
        const BetCompleteYes = () =>{
            let dependantStyleView = {}
            let dependantStyleText = {}
            console.log(cellData.userData)
            console.log('----------')
            console.log(cellData.betData)
            if(cellData.userData[index]==1){
                if(cellData.betData[index] == 1){
                    dependantStyleView= {
                        backgroundColor: '#EEFFE1',
                        borderColor: '#4EB100',
                        borderWidth: 5
                    }
                    dependantStyleText={
                        color: '#4EB100',
                        fontWeight: 'bold'
                    }    
            }else if(cellData.betData[index] == -1){
                dependantStyleView= {
                    backgroundColor: '#FFEEE1',
                    borderColor: '#FF3c3c',
                    borderWidth: 5
                }
                dependantStyleText={
                    color: '#ff3c3c',
                    fontWeight: 'bold'
                }
            }   
            if (cellData.betData[index] == 0){
                dependantStyleView= {
                    backgroundColor: '',
                    borderColor: '#5A4585',
                    borderWidth: 5
                }
                dependantStyleText={
                    color: '#5A4585',
                    fontWeight: 'bold'
                }
            }             
            }
            return(
                <View style = {[{position:'absolute', right: 0, width: 40, height: 40, borderRadius: 50, margin:  10, justifyContent: 'center', alignItems: 'center', borderWidth: 1.5, borderColor: 'grey'}, dependantStyleView]}>
                    <Text style ={[{color: 'grey', fontSize: 10, fontFamily: 'Montserrat_600SemiBold'}, dependantStyleText]}>YES</Text>
                </View>
            )
        }
        let [fontsLoaded] = useFonts({
            Montserrat_600SemiBold
        })
        if(!fontsLoaded){
            return null
        }
        const statusBarData = ()=>{
            let color = '#CECECE'
            let statusText =''
            let fillColor = '#FFFFFF'
            if(cellData.id == 0){
                statusText = cellData.status[index]
                if(Math.abs(cellData.betData[index]+cellData.userData[index]) == 2 ){
                    color = '#4eb100'
                    fillColor = '#EEFFE1'
                }else if(cellData.betData[index]+cellData.userData[index] == 0){
                    fillColor = '#FFEEE1'
                    color = '#FF3c3c'
                }
                statusText = cellData.status[index]
            }
            return{
                color: color,
                statusText: statusText,
                fillColor: fillColor,
            }
        }
        return(
            <View style = {{width: 330, height: 90, borderBottomWidth: 1, borderBottomColor: "#E6E6E6", backgroundColor: 'white', flexDirection: 'row', alignItems: 'center'}}>
                <BetCompleteNo/>
                <View style ={{margin: 10, justifyContent: 'space-evenly'}}>
                    <Text style = {[{fontFamily: 'Montserrat_600SemiBold', width: 170, fontSize: 12, color: statusBarData().color}]}>{cellData.cardData[index].bottomText}</Text>
                    <View style ={[{width: 170, height: 20, borderRadius: 5, borderWidth: 1, borderColor: statusBarData().color, marginVertical: 5, backgroundColor: statusBarData().fillColor,justifyContent: 'center', paddingHorizontal:5 }, ]}>
                        <Text style = {{color: statusBarData().color, fontSize: 10, fontFamily: 'Montserrat_600SemiBold'}}>{statusBarData().statusText}</Text>
                    </View>
                </View>
                <BetCompleteYes/>
            </View>
        )
    }
  return (
    <View>
        <View style ={{marginVertical:20}}>
            <TopHeader game={gameId}/>
        </View>
        <View style = {{alignItems: 'center'}}>
            <FlatList
            data={cellData.userData}
            renderItem={({item, index})=><BreakdownSingleCell index={index}/>}
            style = {{borderRadius: 10, borderColor: 'white', elevation: 10, borderWidth: 7}}
            />
        </View>
    </View>
  )
}

export default DetailedBetBreakdown

const styles = StyleSheet.create({})
import { View, Text, StyleSheet, LogBox } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { PanResponder } from 'react-native'
import { Animated } from 'react-native'
import { Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { BUTTON_PRESSED, DECREASE_CARDS, INCREASE_CARDS,  } from '../../redux/actionTypes';
import { decreaseCardAction, SET_BET_CHOICE_ACTION, resetCardsAction, SET_OPACITY_ACTION } from '../../redux/Index'
import { useNavigation } from '@react-navigation/native'
import {useFonts,Poppins_600SemiBold} from '@expo-google-fonts/poppins'
import { Image } from 'react-native'
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer'
import { Montserrat_500Medium } from '@expo-google-fonts/montserrat'
const Card = (props) => {
  const currentCard = useSelector(state => state.currentCard);
  const cardData = useSelector(state => state.decks[state.currentDeck].cardData[4-props.index]);
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Montserrat_500Medium
})
if(!fontsLoaded){
    return null
}
const CurrentGame = () => {
  const currentDeck = useSelector(state=>state.currentDeck)
  const topBarData = useSelector(state=>state.decks[currentDeck]);
  let leftLogo = topBarData.teamLogos[0]
  let rightLogo = topBarData.teamLogos[1]
  return(
    <View style = {{flexDirection: 'row', width: 195, justifyContent: 'space-evenly', marginLeft: 10}}>
    <View style = {{alignSelf: 'center'}}>
      <Image source={leftLogo} resizeMode='contain' style ={{width: 37, height: 37}}/>
    </View>
    <View style = {{justifyContent: 'center'}}>
    <Text style ={{textAlign: 'center', fontFamily: 'Poppins_600SemiBold', fontSize: 12}}>{(currentDeck ==0)? '84 - 77':"32 - 22"}</Text>
    <Text style ={{textAlign: 'center', fontFamily: 'Poppins_600SemiBold', fontSize:7, color: '#ABABAB'}}>{(currentDeck ==0)? 'Q3 2:52':"Q4 4:22"}</Text>
    </View>
    <View style = {{alignSelf: 'center'}}>
      <Image source={rightLogo} resizeMode='contain' style ={{width: 37, height: 37}}/>
    </View>
    </View>)
}
  return (
    <View style = {[styles.container, {backgroundColor: 'white'}]}>
      <View style = {[{width: 400*0.71,height: 380,borderRadius:20, position:'absolute', backgroundColor: 'white', zIndex: (currentCard==props.index)?-1:99, opacity: 0}]}/>
        <View style ={styles.topBar}>
          <Image source={require('../../assets/Cards/Topbar/leftIcon.png')} resizeMode='stretch' style = {{width:50,height:50, alignSelf: 'center', marginLeft: -10}}/>
          <CurrentGame/>
          <View style = {{position: 'absolute', right: 0, alignSelf: 'center',marginRight: -10}}>
          <CountdownCircleTimer
          isPlaying = {(currentCard == props.index)? true: false}
          duration={10}
          colors={['#FF3C3C', '#510000']}
          colorsTime={[10,0]}
          size={50}
          strokeWidth={5}
          >
            {({remainingTime}) => <Text style = {{color: '#FF3c3c', fontFamily: 'Montserrat_500Medium', fontSize: 14}}>{`${Math.floor(remainingTime/60)}:${('0'+remainingTime%60).slice(-2)}`}</Text>}
          </CountdownCircleTimer>
          </View>
        </View>
        <View style ={styles.image}>
          <Image source={cardData.image} resizeMode='cover' style = {styles.image}/>
        </View>
        <View style = {styles.text}>
          <Text style = {{fontFamily: 'Poppins_600SemiBold', fontSize: 14, textAlign: 'center'}}>{cardData.bottomText}?</Text>
        </View>
    </View>
  )
}
const cardAnimated = (props) => {
  const cardDirStore = useSelector(state => state.isCardAnimate);
  const currentCard = useSelector(state => state.currentCard);
  const currentDeck = useSelector(state => state.currentDeck);
  const userData = useSelector(state => state.decks[currentDeck]);
  const [panResponderEnabled, setPanResponderEnabled] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { width, height } = Dimensions.get('window');
  const SWIPE_THRESHOLD = 0.25 * width;
  const SWIPE_OUT_DURATION = 600;
  const position = useRef(new Animated.ValueXY()).current;
  const [yesNo, setYesNo] = useState(0);
  const images = [require('../../assets/Cards/Yes.png'),require('../../assets/Cards/No.png')]
    const panResponder =  useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: (_, gesture) => {
                return true;
              },
          onPanResponderMove: (_, gestureState) => {
            position.setValue({ x: gestureState.dx, y: gestureState.dy });
            dispatch(SET_OPACITY_ACTION(gestureState.dx/100))
          },
          onPanResponderRelease: (e, gestureState) => {
            if (gestureState.dx > SWIPE_THRESHOLD){
                forceSwipe('right');
                dispatch(SET_OPACITY_ACTION(0))
            }
            else if (gestureState.dx < -SWIPE_THRESHOLD){
                forceSwipe('left');
                dispatch(SET_OPACITY_ACTION(0))
            }else{
                resetPosition()
            }
          }
        })
      ).current;

      const forceSwipe = (direction) => {
        
          dispatch(decreaseCardAction()); 
          const x = direction === 'right' ? width+50 : -width-50;
          (direction === 'right') ? dispatch(SET_BET_CHOICE_ACTION(1)): dispatch(SET_BET_CHOICE_ACTION(-1))   
          Animated.timing(position, {
            toValue: { x, y: 0 },
            duration: SWIPE_OUT_DURATION,
            useNativeDriver: false,
          }).start(() => {onSwipeComplete()});
          if(props.index == 0){
            dispatch(resetCardsAction());
            navigation.push("MajorityMinority")
          }
            
      };
    
      const onSwipeComplete = (index) => {
        // Do something when the card has been swiped
        
      };
    
      const resetPosition = () => {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      };
      const getCardStyle = () => {
        const rotate = position.x.interpolate({
          inputRange: [-width, 0, width],
          outputRange: ['-60deg', '0deg', '60deg'],
        });
        return {
          ...position.getLayout(),
          transform: [{ rotate }],
        };
      };
      useEffect(() => {
        if(currentCard === props.index){
        switch(cardDirStore){
            case 1:
                forceSwipe('right');
                break;
            case 2:
                forceSwipe('left');
                break;
            default:
                break;
        }}
        dispatch({type: BUTTON_PRESSED, payload: 0});
    }, [cardDirStore]);
    useEffect(() =>{
        if(currentCard === props.index){
            setPanResponderEnabled(true)
        }else{
            setPanResponderEnabled(false);
        }
    }, [currentCard])
      return(
    <Animated.View style = {[getCardStyle(), styles.card3]}{...(panResponderEnabled && panResponder.panHandlers)}>
        {images.map((image,ind)=>(<Animated.View
        style = {[{
            height: 100,
            width: 100,
            top: 350/2,
            alignSelf: 'center',
            position: 'absolute',
            zIndex: 10
        }]}
        
        >
          </Animated.View>))}
        <Card data = {props.data.bgColor} index = {props.index}/>
        </Animated.View>
        );
} 
const styles = StyleSheet.create({
        container: {
            alignSelf:'center',
            width: 460*0.71,
            height: 400,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            borderRadius: 20,
            elevation: 7,
        },
        topBar:{
            width: '90%',
            height: 63,
            flexDirection: 'row',

        },
        image:{
            maxHeight: 280,
            maxWidth: 280,
            backgroundColor: 'blue',
            borderRadius: 10
        },
        text:{
          justifyContent: 'center',
            width: 290,
            height: 200/4,
        },
        
    card3:{
        position: 'absolute',
    },
    })
export default cardAnimated
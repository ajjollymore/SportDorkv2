import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { PanResponder } from 'react-native'
import { Animated } from 'react-native'
import { Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { BUTTON_PRESSED, DECREASE_CARDS, INCREASE_CARDS } from '../../redux/actionTypes';
import { decreaseCardAction } from '../../redux/Index'
const Card = (props) => {

  return (
    <View style = {[styles.container, {backgroundColor: props.data}]}>
        <View style ={styles.topBar}>
        </View>
        <View style ={styles.image}/>
        <View style = {styles.text}/>
    </View>
  )
}
const cardAnimated = (props) => {
const cardDirStore = useSelector(state => state.isCardAnimate);
const currentCard = useSelector(state => state.currentCard);
  const [panResponderEnabled, setPanResponderEnabled] = useState(false);
  const dispatch = useDispatch();
  const { width, height } = Dimensions.get('window');
  const SWIPE_THRESHOLD = 0.25 * width;
  const SWIPE_OUT_DURATION = 400;
  const position = useRef(new Animated.ValueXY()).current;
    const panResponder =  useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: (_, gesture) => {
                return true;
              },
          onPanResponderMove: (_, gesture) => {
            position.setValue({ x: gesture.dx, y: gesture.dy });
          },
          onPanResponderRelease: (e, gestureState) => {
            if (gestureState.dx > SWIPE_THRESHOLD){
                forceSwipe('right');
            }
            else if (gestureState.dx < -SWIPE_THRESHOLD){
                forceSwipe('left');
            }else{
                resetPosition()
            }
          }
        })
      ).current;
      const forceSwipe = (direction) => {
          const x = direction === 'right' ? width+50 : -width-50;
          (direction === 'right') ?   
          Animated.timing(position, {
            toValue: { x, y: 0 },
            duration: SWIPE_OUT_DURATION,
            useNativeDriver: false,
          }).start(() => dispatch(decreaseCardAction()));
      };
    
      const onSwipeComplete = (direction) => {
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
        <Animated.View
        style = {{
            height: 100,
            width: 100,
            backgroundColor: 'white',
            top: 150,
            opacity: 0.5,
            alignSelf: 'center',
            position: 'absolute',
            zIndex: 10
        }}
        />
        <Card data = {props.data.bgColor}/>
        </Animated.View>
        );
} 
const styles = StyleSheet.create({
        container: {
            alignSelf:'center',
            width: 400*0.71,
            height: 380,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            borderRadius: 20,
            elevation: 7,
        },
        topBar:{
            width: '90%',
            height: 63,
            backgroundColor: 'green',
            flexDirection: 'row'
        },
        image:{
            height: 240,
            width: 240,
            backgroundColor: 'blue'
        },
        text:{
            width: 240,
            height: 200/4,
            backgroundColor: 'yellow'
        },
        
    card3:{
        position: 'absolute',
    },
    })
export default cardAnimated
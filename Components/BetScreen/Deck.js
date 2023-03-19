import { StyleSheet, Text, View, Animated, PanResponder } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Card from './Card'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { BUTTON_PRESSED } from '../../redux/actionTypes';
const Deck = () => {
    const dispatch = useDispatch();
    const cardDirStore = useSelector(state => state.isCardAnimate);
    const position = useRef(new Animated.ValueXY()).current;
    const { width, height } = Dimensions.get('window');
const SWIPE_THRESHOLD = 0.25 * width;
const SWIPE_OUT_DURATION = 250;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          forceSwipe('left');
        } else {
          resetPosition();
        }
      },
    })
  ).current;
  const forceSwipe = (direction) => {
    const x = direction === 'right' ? width : -width;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: false,
    }).start(() => onSwipeComplete(direction));
  };

  const onSwipeComplete = (direction) => {
    // Do something when the card has been swiped
    resetPosition();
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
    switch(cardDirStore){
        case 1:
            forceSwipe('right');
            break;
        case 2:
            forceSwipe('left');
            break;
        default:
            break;
    }
    dispatch({type: BUTTON_PRESSED, payload: 0});
}, [cardDirStore]);
  return (
    <View style = {styles.container}>
      <View style = {styles.deck}>
        
      <View style = {[styles.card1, {transform: [{translateY: 10}, {scaleY: 1.050}, {scaleX: 0.950}]}]}>
            <Card/>
        </View>

        <View style = {[styles.card1, {transform: [{translateY: 10}, {scaleY: 1.050}, {scaleX: 0.950}]}]}>
            <Card/>
        </View>
        
        <View style = {[styles.card1, {transform: [{translateY: 10}, {scaleY: 1.050}, {scaleX: 0.950}]}]}>
            <Card/>
        </View>

        <View style = {[styles.card2, {transform: [{scaleY: 1.025}, {translateY: 5}, {scaleX: 0.975}]}]}>
            <Card/>
        </View>

        <Animated.View style = {[getCardStyle(),styles.card3]}{...panResponder.panHandlers}>
            <Card/>
        </Animated.View>
      </View>
    </View>
  )
}

export default Deck

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    deck: {
        backgroundColor: 'grey',
        height: 400,
        width: 400*0.71,
    },
    card1:{
        position: 'absolute',
        
    },
    card2:{
        position: 'absolute', 
        
    },
    card3:{
        position: 'absolute',
    },
})
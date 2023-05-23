import { StyleSheet, Text, View, Animated, PanResponder } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Card from './Card'
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { BUTTON_PRESSED } from '../../redux/actionTypes';
const Deck = ({setOpacity}) => {
  const dispatch = useDispatch();
  const cardDirStore = useSelector(state => state.isCardAnimate);
  const { width, height } = Dimensions.get('window');
  const SWIPE_THRESHOLD = 0.25 * width;
  const SWIPE_OUT_DURATION = 250;
  const cards = [
    {id: 0, bgColor: 'pink'},
    {id: 1, bgColor: 'gray'},
    {id: 2, bgColor: 'black'},
    {id: 3, bgColor: 'cyan'},
    {id:4, bgColor: 'red'}
  ]
const currentCard = useSelector(state => state.currentCard);
return (
  <View style = {styles.container}>
      <View style = {styles.deck}>
        {cards.map((value,index)=>{
          const scaleAnimValue = useRef([new Animated.Value((1-0.05*(currentCard-index))), new Animated.Value((currentCard*7-(index)*7))]).current
          useEffect(()=>{
            Animated.parallel([
              Animated.timing(scaleAnimValue[0], {toValue: 1-0.05*(currentCard-index++), duration: 300, useNativeDriver: true}),
              Animated.timing(scaleAnimValue[1], {toValue: currentCard*7-(index++)*7, duration: 300, useNativeDriver: true}),
            ]).start()
          }, [currentCard])
          return(
          <Animated.View style ={{transform:[{scaleX: (currentCard-index <3)?scaleAnimValue[0]:0}, {translateY:(currentCard-index < 3)?scaleAnimValue[1]:0}]}}>
            <Card index = {index} data = {value} setOpacity = {setOpacity}>
            </Card>
          </Animated.View>
            )
        })}
      </View>
    </View>
  )
}

export default Deck

const styles = StyleSheet.create({
    container: {
      marginRight: 75,
      marginTop: 0
    },
    deck: {
        height: 400,
        width: 400*0.71,
        marginVertical: 10,
        marginLeft: 30
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
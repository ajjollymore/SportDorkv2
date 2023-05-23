import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const BetCountdown = ({initialSeconds}) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    useEffect(() => {
        let interval = null;
        if (seconds > 0) {
          interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
          }, 1000);
        }
        return () => clearInterval(interval);
      }, [seconds]);
  return (
    <View style = {styles.timer}>
            <Text style = {[{color: "#FF5E5E", bottom: 2},{fontFamily: 'scoreboard', fontSize: 49,fontWeight: "600"} ]}>{`${Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0')}:${(seconds % 60)
      .toString()
      .padStart(2, '0')}`}</Text>
    </View>
  )
}

export default BetCountdown

const styles = StyleSheet.create({
    timer:{
        width:131,
        height: 51,
        backgroundColor: 'black',
        alignItems: 'center',
        borderRadius: 8.5
    }
})
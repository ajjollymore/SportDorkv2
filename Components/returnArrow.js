import { View, Text } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ReturnArrow() {
  const navigation = useNavigation()
    return <TouchableOpacity onPress={() => { navigation.navigate("HomeStack"); } } style={{zIndex: 999, width: 50, height: 50, marginLeft: 20, position: 'absolute', left: 0, top: 18 }}>
      <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>;
  }
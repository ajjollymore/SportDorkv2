import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import Index from './BetScreenIndex';
import BottomTabs from './Components/BottomTabs';
import { Provider, useStore } from 'react-redux';
import store from './redux/store'
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <BottomTabs/>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

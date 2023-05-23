import 'react-native-gesture-handler';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import BottomTabs from './Components/BottomTabs';
import { Provider, useStore } from 'react-redux';
import store from './redux/store'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'
export default function App() {
  LogBox.ignoreAllLogs()
  let [fontsLoaded] = useFonts({ 'scoreboard': require('./assets/fonts/scoreboard.ttf') })
  if (!fontsLoaded) {
    return (
      <AppLoading />
    );
  }
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

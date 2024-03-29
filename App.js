import { React, useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Navbar from './src/components/Navbar';
import Menu from './src/components/Menu';
import Footer from './src/components/Footer';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'k2d-bold': require('./src/assets/fonts/K2D-Bold.ttf'),
          'nunito-bold': require('./src/assets/fonts/Nunito-Bold.ttf'),
          'nunito-medium': require('./src/assets/fonts/Nunito-Medium.ttf'),
        });

      } catch (e) {
        console.warn(e);
      } finally {
        console.log('Setting appIsReady to true');
        setAppIsReady(true);  
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);


   
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;  
  }

  return (
    <View style={{ flex: 1 }} onReady={onLayoutRootView}>
      <StatusBar hidden={true} />
      <Navbar/>
      <Menu/>
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
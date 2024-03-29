import {React, useCallback} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
const Footer = () => {

  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.circle}>
            <Text style={styles.headerText}>BOC</Text>
          </View>
          <Text style={[styles.text, {paddingLeft: 8}]}>BetOnGoodness</Text>
        </View>
        <Text style={[styles.text, {flex: 1, fontSize: 20, fontFamily: 'nunito-medium'}]}>Лоти для допомоги: купуйте і підримуйте благодійність </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '20%',
    marginHorizontal: 25
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  circle: {
    backgroundColor: '#000',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },  
  text: {
    fontSize: 18,
    fontFamily: 'k2d-bold',
  },
});

export default Footer;

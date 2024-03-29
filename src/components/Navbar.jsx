import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const userIcon = require("../assets/user.png");
const exitIcon = require("../assets/exit.png");

const Navbar = () => {
  return (
      <View style={styles.header}>
        <View style={styles.circle}>
          <Text style={styles.headerText}>BOC</Text>
        </View>
        <TouchableOpacity style={styles.headerButtonCabinet}>
          <Image source={userIcon}/>
          <Text style={styles.headerButtonText}>Кабінет</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Image source={exitIcon} style={{width: 40, height: 40}}/>
        </TouchableOpacity>
      </View> 
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    height: 96
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
  headerButtonCabinet: {
    width: 126, 
    height: 48,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderBlockColor: '#131313',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 50,
  },
  headerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  headerButtonText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'nunito-bold'
  }
});

export default Navbar;

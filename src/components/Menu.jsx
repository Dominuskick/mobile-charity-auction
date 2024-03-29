import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import CustomButton from "./CustomButton";

const Menu = () => {
    return (
    <View style={styles.menuContainer}>
        <CustomButton title={"Лоти"} 
            buttonStyle={styles.menuButton} 
            textStyle={styles.menuButtonText}/>
        <CustomButton title={"Мета"} 
            buttonStyle={styles.menuButton} 
            textStyle={styles.menuButtonText}/>
        <CustomButton title={"FAQ"} 
            buttonStyle={styles.menuButton} 
            textStyle={styles.menuButtonText}/>
        <CustomButton title={"Пошук"} 
            buttonStyle={styles.menuButton} 
            textStyle={styles.menuButtonText}/>
      </View>
    );
}

const styles = StyleSheet.create({
    menuContainer: {
        padding: 10,
        backgroundColor: '#131313',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    menuButton: {
        backgroundColor: '#555',
        padding: 10,
        marginBottom: 10,
        width: '80%',
        marginTop: 20,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        
    },
    menuButtonText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'nunito-bold',
    },
  });

export default Menu;
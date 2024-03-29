import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity, Text } from 'react-native';

const CustomButton = ({ title, buttonStyle, textStyle }) => (
    <TouchableOpacity style={[styles.button, buttonStyle]}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#4a4a4a',
      borderRadius: 16,
      borderWidth: 1,
      borderColor: '#fff',
      paddingVertical: 15,
      paddingHorizontal: 24,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
    },
  });

export default CustomButton;
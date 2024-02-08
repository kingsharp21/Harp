import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function Buttons({ onPress, title }) {
    return ( 
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{title}</Text>
      </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      marginTop:30,
      width: '100%',
      alignSelf:'center',
      backgroundColor: 'transparent',
      borderRadius: 25,
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderStyle:'solid',
      borderWidth: 1,
      borderColor: '#686779'
    },
    appButtonText: {
      fontSize: 25,
      color: '#fff',
      fontWeight: '600',
      alignSelf: 'center',
      textTransform: 'capitalize'
    }
  });

export default Buttons;
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Ionicons, Entypo } from "@expo/vector-icons";


function Buttons({ onPress, title, icon}) {
    return ( 
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
          {icon?
          <Entypo name='controller-play' size={30}/>
          :
          ''
          }
          
        <Text style={styles.appButtonText}>{title}</Text>
      </TouchableOpacity>
     );
}

const styles = StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      marginTop:20,
      width:'100%',
      padding:10,
      alignSelf:'center',
      backgroundColor:'#FFE715',
      borderRadius: 10,
      paddingVertical: 20,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'row'
    },
    appButtonText: {
      fontSize: 20,
      color: '#000',
      fontWeight: '500',
      alignSelf: 'center',
      textTransform: 'capitalize',
      zIndex:100
    }
  });

export default Buttons;
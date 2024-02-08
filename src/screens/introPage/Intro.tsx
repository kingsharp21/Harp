import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';
import Buttons from '../../components/Buttons';


export default function Intro({navigation}) {
  return (
    <>
    <View style={styles.container}>
      {/* <View style={styles.logo}>
        <Text style={styles.logo_text}>Harp</Text>
      </View> */}
      <View style={styles.homeImage}>
        <Image source={require('../../assets/img/girlW.jpeg')} style={{width: '100%', height: '100%'}}/>
      </View>

      <View style={styles.text_container}>
        <Text style={styles.large_text}>The Future</Text>
        <Text style={styles.large_text}>of The Creative</Text>
        <Text style={styles.large_text}>Economy</Text>
        <Buttons title='Get Started' onPress={() => navigation.navigate('SignInPage')}/>
      </View>
      
      
      

    </View>
    </>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141319',
    alignItems: 'center',
    // justifyContent: 's',
    color:'white'
  },
  logo:{
    height: '30%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_container:{
    // backgroundColor:'red',
    // height:'70%',
    paddingTop:30,
    // width:'100%'
  },
  logo_text:{
    color:'#686779',
    fontSize: 50,
    textAlign: 'center',
    fontWeight:'800',
  },
  large_text: {
    color:'#686779',
    fontSize: 50,
    textAlign: 'center',
    fontWeight:'800'
  },
  homeImage: {
    backgroundColor:'#24242e',
    // backgroundColor:'#40902e',
    alignSelf:'flex-end',
    height: '50%',
    width:'100%',
    paddingTop:50,
    // paddingBottom:20 
    // position:'absolute',
    // bottom:0

  }
});


  
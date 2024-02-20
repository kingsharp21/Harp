import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';
import Buttons from '../../components/Buttons';



export default function Intro({navigation}) {
  return (
    <>
    <View style={styles.container}>
          <View style={styles.middleSection}>
            <Image style={{ height:100, width:100,}} source={require("../../assets/img/worchit-logo.png")}/>
            {/* <Image style={{ height:100, width:100 }} source={require("../../assets/img/block 1.png")}/> */}
            <Text style={styles.worchitText}>WORCH<Text style={{ color:'#FFE715' }}>IT</Text></Text>
          </View>

          <View style={styles.getStarted}>
              <Text style={{ fontSize:40, color:'white',fontWeight:'600', marginBottom:10 }}>Welcome to Worchit</Text>
              <Text style={{ fontSize:20, color:'white', }}>Cina nkoa!!</Text>

              <Buttons title='Get Started' onPress={() => navigation.navigate('SignInPage')}/>
          </View>
    </View>
    </>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent:'space-around',
    color:'white',
    padding:5,
    paddingTop:200
  },
  middleSection: {
    alignItems: 'center',
    justifyContent:'center',
    // backgroundColor:'red',
    width:'100%',
    // height:'70%'
    // height:200
  },
  worchitText: {
    color:'white',
    fontSize:45,
    marginTop:10
  },
  getStarted:{
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom:25,
    width:'100%'
    // position:'absolute',
    // bottom:15,

  }
});


  
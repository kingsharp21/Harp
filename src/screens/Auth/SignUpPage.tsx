import React, {useEffect, useState} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View,TextInput, Image} from 'react-native';

import { Ionicons, Entypo } from "@expo/vector-icons";

import { register } from '../../utilities/api/AuthAdaptor';

import Buttons from '../../components/Buttons';

function SignUpPage({navigation}) {
  const [inputData, setInputData] = useState({
    name:'', 
    number:'',
    password:'',
    confirm_password:''
})

function processMsisdn(msisdn) {
  function startsWith(str, prefix) {
      return str.indexOf(prefix) === 0;
  }

  if (msisdn.length > 10) {
      if (startsWith(msisdn, '233')) {
          console.log(msisdn);
          return msisdn;
      } else if (startsWith(msisdn, '+233')){
          console.log(msisdn.replace('+', ''));
          return msisdn.replace('+', '');
      } else {
          return null;
      }
  } else if (msisdn.length === 10) {
      if (startsWith(msisdn, '0')) {
          console.log('233' + msisdn.substring(1));
          return '233' + msisdn.substring(1);
      } else {
          console.log(null);
          return null;
      }
  } else {
      console.log(null);
      return null;
  }
}


const handleOnChange = (event, feildname)=>{
    setInputData(prev => ({
        ...prev,
        [feildname]: event
      }));
}

// '3187'

const handleLogin = async ()=>{
    processMsisdn(inputData.number)
    // console.log(inputData)

    // try {
    //     const res = await register(`${inputData.number}`,`${inputData.password}`,`${inputData.name}`);
    //     console.log("Res",res.data);
    //     navigation.navigate('Intro')
    // } catch (error) {
    //     console.log("Error",error.data);
    // }
}

    return ( 
        <SafeAreaView style={styles.container}>
          <View style={{ padding:10, width:'100%' }}>
            <Image style={{ height:100, width:200, marginBottom:40}} source={require("../../assets/img/logo.png")}/>
            <Text style={styles.header}>Create an account</Text>
            <TextInput style={styles.input} placeholder='Full Name' placeholderTextColor='white' onChangeText={(e)=>handleOnChange(e,'name')}/>
            <TextInput style={styles.input} placeholder='Phone Number' keyboardType = 'phone-pad' placeholderTextColor='white' onChangeText={(e)=>handleOnChange(e,'number')}/>

            <TextInput style={styles.input} secureTextEntry={true} placeholder='Password' placeholderTextColor='white' onChangeText={(e)=>handleOnChange(e,'password')}/>
            <TextInput style={styles.input} secureTextEntry={true} placeholder='Confirm Password' placeholderTextColor='white' onChangeText={(e)=>handleOnChange(e,'confirm_password')}/>
            {/* <TextInput style={styles.input} placeholder='Name' placeholderTextColor='white'/> */}
            <Buttons title='Sign Up' onPress={handleLogin} icon={false}/>

            <Text style={{ color:'white', marginTop:20, fontSize:18,alignItems:'center' }}>Already have an account? <TouchableOpacity onPress={()=>navigation.navigate('LogInPage')}><Text style={styles.signIn}>Sign in!</Text></TouchableOpacity></Text>
          </View>
           
        </SafeAreaView>
     );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      
      alignItems: 'center',
      justifyContent: 'flex-start',
      color:'white',
      paddingLeft:40,
      
    },
    header:{
      fontSize:25,
      fontWeight:'600',
      color:'white',
      marginBottom: 25
    },
    input: {
      backgroundColor:'#545454',
      width:'100%',
      padding:10,
      paddingHorizontal:20,
      fontSize:16,
      height:55,
      color:'white',
      borderRadius:10,
      marginBottom:20,
      borderColor:'white',
    },
    signIn:{
      color:'#FFE715',
      fontSize:18
    }
   
  });
  

export default SignUpPage;
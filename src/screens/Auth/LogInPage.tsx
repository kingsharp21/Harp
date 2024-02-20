import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View,TextInput, Image} from 'react-native';


import { login } from '../../utilities/api/AuthAdaptor';


import { Ionicons, Entypo } from "@expo/vector-icons";

import Buttons from '../../components/Buttons';

function LogInPage({navigation}) {
    const [passwordVisibility, setPasswordVisibility] = useState(true)
    const [inputData, setInputData] = useState({
        number:'',
        password:''
    })

    const handleOnChange = (event, feildname)=>{
        // console.log('kingsharp',event);

        setInputData(prev => ({
            ...prev,
            [feildname]: event
          }));

        //   console.log(event.target.value);
          
    }

    // '3187'

    const handleLogin = async ()=>{
        try {

            const res = await login(`${inputData.number}`,`${inputData.password}`);
            console.log("Res",res.data);
            navigation.navigate('Home')
            
        } catch (error) {
            console.log("Error",error.data);
            
        }
    }

   
    return ( 
        <SafeAreaView style={styles.container}>
            <View style={{ padding:10, width:'100%' }}>
                <Image style={{ height:100, width:200, marginBottom:40}} source={require("../../assets/img/logo.png")}/>
                <Text style={styles.header}>Sign In</Text>
                <TextInput style={styles.input} placeholder='Phone Number' keyboardType ='phone-pad' placeholderTextColor='white' onChangeText={(e)=>handleOnChange(e,'number')}/>
                <View style={{ width:'100%', alignItems:'center', justifyContent:'center'}}>
                        <TextInput style={styles.input} secureTextEntry={true} placeholder='Password' placeholderTextColor='white' onChangeText={(e)=>handleOnChange(e, 'password')} />
                        {passwordVisibility?
                        
                            <TouchableOpacity onPress={(prev)=> setPasswordVisibility(!prev)} style={{ position:'absolute', right:35, top:15  }}>
                            <Entypo name='eye' color='white' size={20}/>
                            </TouchableOpacity>
                        :
                            <TouchableOpacity onPress={(prev)=> setPasswordVisibility(!prev)} style={{ position:'absolute', right:35, top:15  }}>
                                <Entypo name='eye-with-line' color='white' size={20}/>
                            </TouchableOpacity>
                        
                        }
                </View>
                <Buttons title='Sign In' onPress={handleLogin} icon={false}/>

                <View style={styles.help}>
                {/* <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                    /> */}
                    <Text style={styles.helpText}>Remember me</Text>
                    <TouchableOpacity onPress={(prev)=> setPasswordVisibility(!prev)}>
                        <Text style={styles.helpText}>Need help?</Text>
                    </TouchableOpacity>
                    
                </View>
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
      padding:10
    },
    header:{
      fontSize:25,
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
    },
    help:{
        color:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:15
    },
    helpText:{
        color:'white',
        fontSize:15,
    }
   
  });
  

export default LogInPage;
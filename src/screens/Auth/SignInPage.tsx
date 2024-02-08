import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Buttons from '../../components/Buttons';

function SignInPage({navigation}) {
    return ( 
        <View style={styles.container}>
            <Text>Sign In</Text>
            <Buttons title='Get Started' onPress={() => navigation.navigate('Intro')}/>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      color:'white'
    },
   
  });
  

export default SignInPage;
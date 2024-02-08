import React, {useState, useEffect} from "react";
import { SafeAreaView, StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image,TextInput, ImageBackground } from 'react-native';

import { BlurView } from 'expo-blur';

function Play() {
    const image = {uri: 'https://i.scdn.co/image/ab6761610000e5eb7f6d6cac38d494e87692af99'};
    const oo =   {
        id: 1,
        name: "Doja Cat",
        artise_id: "kekvy18BhIwxCy",
        email: "",
        status: "0000-00-00 00:00:00",
        gender: null,
        contact_number: null,
        country: null,
        genres: null,
        followers: "28028845",
        bg_img:
          "https://i.scdn.co/image/ab6761610000e5eb7f6d6cac38d494e87692af99",
        md_img:
          "https://i.scdn.co/image/ab676161000051747f6d6cac38d494e87692af99",
        sm_img:
          "https://i.scdn.co/image/ab6761610000f1787f6d6cac38d494e87692af99",
        spotify_id: "5cj0lLjcoR7YOSnhnX0Po5",
        created_at: null,
        updated_at: null,
      }
    return ( 
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={image}>
            <BlurView intensity={20} style={{ height:200, width:'100%', position:'absolute', bottom:0 }}>
                <Text>sbfjsvf sjhfnb</Text>
            </BlurView>
            </ImageBackground>
        </View>

     );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      position:'relative'
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
  });

export default Play;
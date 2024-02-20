import React, {useState, useEffect} from "react";
import { SafeAreaView, StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image,TextInput, ImageBackground } from 'react-native';
import { AntDesign, FontAwesome5, Ionicons, Entypo, MaterialIcons,  } from "@expo/vector-icons";

import { BlurView } from 'expo-blur';

function Play() {
    const image = {uri: 'https://i.scdn.co/image/ab6761610000e5eb68f6e5892075d7f22615bd17'};
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
            <BlurView  intensity={50} style={{ height:250, width:'100%', position:'absolute', bottom:0, padding:10, backgroundColor:'#151718caf'}}>
                <View style={styles.playDesc}>
                  <View>
                    <Text numberOfLines={1} style={{ fontSize:23, color:'white', maxWidth:250 }}>Easy On Me</Text>
                    <Text style={{ fontSize:15, color:'white', marginTop:5 }}>Artise</Text>
                  </View>
                  <View style={{ flexDirection:'row' }}>
                    <Ionicons name="mic" size={30} color="white" style={{ marginRight:10}}/>
                    <Ionicons name="heart" size={30} color="red"/>
                  </View>
                </View>
                <View style={styles.playLine}>
                    <View style={{ backgroundColor:'green', width:'100%', height:4 }}></View>
                    <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:10  }}>
                      <Text style={{ fontSize:15, color:'white' }}>2:01</Text>
                      <Text style={{ fontSize:15, color:'white' }}>10:01</Text>
                    </View>
                </View>
                <View style={styles.playControll}>
                  <TouchableOpacity>
                    <Ionicons name="shuffle" size={40} color="white"/>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <MaterialIcons name="skip-previous" size={45} color="white"/>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ backgroundColor:'green', width:60, height:60, borderRadius:50, alignItems:'center', justifyContent:'center' }}>
                    <Ionicons style={{ marginLeft:5 }} name="play" size={40} color="black"/>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <MaterialIcons name="skip-next" size={45} color="white"/>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Ionicons name="repeat" size={40} color="white"/>
                  </TouchableOpacity> 
                </View>
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
    playDesc: {
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      padding:10,
    },
    playControll:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around'
    },
    playLine: {
      // height:25,
      padding:10,
    }
  });

export default Play;
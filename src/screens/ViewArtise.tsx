import React, {useState, useEffect} from "react";
import { SafeAreaView, StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image,TextInput } from 'react-native';
import { Ionicons, FontAwesome5,MaterialIcons,Entypo } from "@expo/vector-icons";

import Animated from 'react-native-reanimated';
import { BlurView } from 'expo-blur';


function ViewArtise({route, navigation}) {
    const { image, artise, spotifyId,mainId, followers } = route.params;
    const[liked, setLiked] = useState(false)
    // JSON.stringify(itemId)
    const numbers = Intl.NumberFormat('en-US').format(followers)
    return ( 
        // <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <View style={styles.imgLayer}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <Ionicons name="arrow-back-circle-outline" size={30} color={'white'} />
                </TouchableOpacity>
                <View style={styles.rightIcons}>
                    <TouchableOpacity style={{ marginRight:10 }}>
                        {liked?
                        <Ionicons name="heart" size={30} color={'red'} onPress={()=> setLiked(prev=>!prev)} />
                        :
                        <Ionicons name="heart-outline" size={30} color={'white'} onPress={()=> setLiked(prev=>!prev)} />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Entypo
                            name="dots-three-vertical"
                            size={20}
                            color={'white'}
                        />
                    </TouchableOpacity>
                </View>
                
            
                <Animated.Image
                    source={{ uri: `${image}` }}
                    style={{ width: '100%', height: '100%' }}
                    sharedTransitionTag="tag"
                />
                <View style={styles.imgText}>
                        <Text style={{ fontSize:40,  color:'white', fontWeight:'700', marginBottom:5 }}>{artise} <MaterialIcons name="verified" size={25} color="#A7C7E7" /></Text>
                        <Text style={{ fontSize:20,  color:'white', fontWeight:'500' }}>{numbers} Followers</Text>
                </View>
                <View style={styles.play}>
                    <Ionicons  name="play" size={50} color={'#000000'} />
                </View>
            </View>
            <View style={{ padding:10 }}>
                <Text style={{  color:'white' }}>23582 likes</Text>
            </View>
            {/* <BlurView intensity={5} style={{ height:300, width:'100%', position:'absolute' }}>
                <Text>sbfjsvf sjhfnb</Text>
            </BlurView> */}
        </View>
    // </SafeAreaView>
     );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#141319",
        // backgroundColor: "red",
        color: "white",
        
    },
    imgLayer: {
        position:'relative',
        width: '100%', 
        height: 300 
    },
    backBtn: {
        position:'absolute',
        top:50,
        left:10,
        height:'auto',
        width:'auto',
        padding:3,  
        zIndex:100
    },
    rightIcons: {
        position:'absolute',
        top:50,
        right:10,
        height:'auto',
        width:'auto',
        padding:3,  
        zIndex:100,
        flexDirection:'row',
        alignItems:'center',
    },
    
    imgText: {
        color:'white',
        position:'absolute',
        left:10,
        bottom:30,
        maxWidth:350
    },
    play:{
        backgroundColor:'white',
        width:60,
        height:60,
        position:'absolute',
        bottom:-30,
        right:15,
        padding:5,
        paddingLeft:7,
        borderRadius:40
    },
    playlist:{
        padding:10
    }
})

export default ViewArtise;
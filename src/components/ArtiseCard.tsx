import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, Button } from 'react-native';
import { AntDesign, FontAwesome5, Ionicons, Entypo, MaterialIcons,  } from "@expo/vector-icons";



import Animated, { withSpring } from 'react-native-reanimated';

import { SharedTransition } from 'react-native-reanimated';



const customTransition = SharedTransition.custom((values) => {
  'worklet';
  return {
    height: withSpring(values.targetHeight),
    width: withSpring(values.targetWidth),
    originX: withSpring(values.targetOriginX),
    originY: withSpring(values.targetOriginY),
  };
});


function ArtiseCard({image, name, index, followers,mainId, spotifyId, navigation}) {
    return ( 
        <TouchableOpacity style={styles.artiseCard} key={index} onPress={()=>{navigation.navigate('view',{'image': image, 'artise':name, 'spotiyId':spotifyId, 'mainId':mainId, 'followers':followers})}}>
           
            <Animated.Image
                source={{ uri: `${image}` }}
                style={{ width: 80, height: 80, borderRadius: 50 }}
                sharedTransitionTag="tag"
                sharedTransitionStyle={customTransition}
            />
            {/* <Image
                source={{ uri: `${image}` }}
                style={{ width: 100, height: 100, borderRadius: 50 }}
            /> */}
            <Text numberOfLines={1} style={styles.name}>{name}</Text>
            {followers>100000 && <MaterialIcons style={styles.verifiedIcon} name="verified" size={25} color="#A7C7E7" />}
            
        </TouchableOpacity>
     );
}
const styles = StyleSheet.create({
    artiseCard: {
        gap: 10,
        flexDirection: "column",
        alignItems: "center",
        marginRight: 15,
        position:'relative'
    },
    name:{
        color:'white',
        fontSize:16,
        fontWeight:'500',
        maxWidth:110,
        marginBottom: 8,
        textTransform: "capitalize",
    },
    verifiedIcon:{
        position:'absolute',
        bottom:50,
        right:0
    }

})

export default ArtiseCard;
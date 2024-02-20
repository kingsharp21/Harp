import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Platform,
  StatusBar,
  FlatList,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";

import ArtiseCard from "../../components/ArtiseCard";

import Buttons from "../../components/Buttons";

import { BlurView } from 'expo-blur';

function LandingPage({ navigation }) {
  const width = Dimensions.get("window").width;
  const flatListRef = useRef(null);

  const carouselData = [
    {
      id: "1",
      image: require("../../assets/img/photo_3.jpg"),

    },
    {
      id: "2",
      image: require("../../assets/img/photo_1.jpg"),
    },
    {
      id: "3",
      image: require("../../assets/img/photo_2.jpg"),
    },
    // {
    //   id: "4",
    //   image: require("../../assets/img/bijoux-slide.jpg"),
    // },
    // {
    //   id: "5",
    //   image: require("../../assets/img/boyW.jpeg"),
    // },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image source={item.image} style={{height:'100%', borderRadius:10, width: width, marginRight:0}} />
        <BlurView intensity={40} style={styles.imgText}>

              <Text style={{ fontSize:25,  color:'white', fontWeight:'700',textTransform:'uppercase'}}>I THOUGHT</Text>
              {/* <Buttons title="Watch Now" onPress={()=>''}/> */}
          </BlurView>
      </View>
    );
  };

  const handleScroll = ({ event }) => {};

  const renderDotIndicator = () => {
    return carouselData.map((dot, index) => {
      return (
        <View
          style={{
            backgroundColor: "red",
            height: 10,
            width: 10,
            borderRadius: 5,
          }}
        ></View>
      );
    });
  };


  const scrollToBottom = () => {
    flatListRef.current.scrollToEnd({ animated: true });
};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topArea}>
          <View style={styles.profileImg}>
            <Image
              source={require("../../assets/img/boyW.jpeg")}
              style={{ width: 40, height:40, borderRadius: 50 }}
            />
            <View style={styles.profileImgDesc}>
              <Text numberOfLines={1} style={styles.username}>Kingsharp Nkansah</Text>
            </View>
          </View>
          <View style={styles.topAreaIcons}>
            <Ionicons
              name="search-outline"
              size={25}
              color="#686779"
              style={{ marginRight: 20 }}
            />
            <Ionicons name="notifications-outline" size={25} color="#686779" />
          </View>
      </View>
      <View style={{ position:'relative', height:200 }}>
        <FlatList
          ref={flatListRef}
          data={carouselData}
          renderItem={renderItem}
          horizontal={true}
          pagingEnabled={true}
          automaticallyAdjustContentInsets={true}
          automaticallyAdjustsScrollIndicatorInsets={true}
          keyExtractor={carouselData => carouselData.id}
          onContentSizeChange={() => scrollToBottom()}
        />
      </View>

      <View style={{marginTop:10, paddingBottom:10, height:'auto', width:'100%'}}>
        <ScrollView style={styles.language} showsVerticalScrollIndicator={false} horizontal={true} showsHorizontalScrollIndicator={false}>
         
          <ArtiseCard image={'https://i.scdn.co/image/ab67616100005174f150017ca69c8793503c2d4f'} name="English"  index='10'  followers='100' mainId='sfjsnljfknskjf' spotifyId='dfsdf' navigation/>
          <ArtiseCard image={'https://i.scdn.co/image/ab67616100005174f150017ca69c8793503c2d4f'} name="Twi"  index='10'  followers='100' mainId='sfjsnljfknskjf' spotifyId='dfsdf' navigation/>
          <ArtiseCard image={'https://i.scdn.co/image/ab67616100005174f150017ca69c8793503c2d4f'} name="Ewe"  index='10'  followers='100' mainId='sfjsnljfknskjf' spotifyId='dfsdf' navigation/>
          <ArtiseCard image={'https://i.scdn.co/image/ab67616100005174f150017ca69c8793503c2d4f'} name="Ga"  index='10'  followers='100' mainId='sfjsnljfknskjf' spotifyId='dfsdf' navigation/>
          <ArtiseCard image={'https://i.scdn.co/image/ab67616100005174f150017ca69c8793503c2d4f'} name="Hausa"  index='10'  followers='100' mainId='sfjsnljfknskjf' spotifyId='dfsdf' navigation/>
          <ArtiseCard image={'https://i.scdn.co/image/ab67616100005174f150017ca69c8793503c2d4f'} name="Dagbani"  index='10'  followers='100' mainId='sfjsnljfknskjf' spotifyId='dfsdf' navigation/>
        </ScrollView>
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
  topArea: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor:'red'
  },
  topAreaIcons: {
    flexDirection: "row",
  },
  profileImg: {
    width: "auto",
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    display: "flex",
  },
  profileImgDesc: {
    width: 150,
  },
  username: {
    color: "white",
    fontSize: 15,
    // marginBottom: 8,
    fontWeight: "500",
    textTransform: "capitalize",
  },
  quickpick: {
    marginTop: 20,
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#141319",
    height: "auto",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  imgText:{
    position:'absolute',
    bottom:0,
    left:0,
    padding:10,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'

  },
  language:{
      flexDirection:"row",
      marginVertical: 12 / 2,
      marginHorizontal: 12 / 2,  
    },
});

export default LandingPage;

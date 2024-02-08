import React, {useEffect, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
import ViewArtise from '../../screens/ViewArtise';

// Screens
import Intro from "../../screens/introPage/Intro";
import LandingPage from "../../screens/landingPage/LandingPage";
import SearchPage from "../../screens/SearchPage";
import { View } from "react-native";

const Tab = createBottomTabNavigator();


function User() {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { 
            borderBlockColor:"#141319",
            backgroundColor: "#141319",
            shadowColor:'white',
            shadowOpacity:0.3,
            shadowOffset:'',
            // backgroundColor: "red",
            padding:10,
         },
        }}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <AntDesign name="home" size={size} color={focused?'white': 'grey'} />
            ),
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'grey',
            title: "Home",
          }}
          name="Home"
          component={LandingPage}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <AntDesign name="search1" size={size} color={focused?'white': 'grey'} />
            ),
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'grey',
            title: "Search",
          }}
          name="search"
          component={SearchPage}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <MaterialCommunityIcons name="google-podcast" size={size} color={focused?'white': 'grey'} />
            ),
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'grey',
            title: "live",
          }}
          name="live"
          component={SearchPage}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <FontAwesome5 name="compass" size={size} color={focused?'white': 'grey'} />
            ),
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'grey',
            title: "Explore",
          }}
          name="explore"
          component={SearchPage}
        />

        

        <Tab.Screen
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <AntDesign
                name="setting"
                size={size}
                color={focused?'white': 'grey'}
              />
            ),
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'grey',
            title: "Settings",
          
          }}
          name="Settings"
          component={Intro}
        />
{/* 
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused, size, color }) => (
              <FontAwesome5
                name="user-alt"
                size={size}
                color={focused?'white': 'grey'}
              />
            ),
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'grey',
            title: "Profile",
          }}
          name="Profile"
          component={Intro}
        /> */}
      </Tab.Navigator>
    // </NavigationContainer>
    // <NavigationContainer>
    //         <Stack.Navigator>
    //             <Stack.Screen options={{ headerShown:false }} name="Intro" component={Intro} />
    //             <Stack.Screen options={{ headerShown:false }} name="SignInPage" component={LandingPage} />
    //             <Stack.Screen options={{ headerShown:false }} name="view" component={ViewArtise} />
    //         </Stack.Navigator>
    //     </NavigationContainer>
  );
}

export default User;

import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image,TextInput } from 'react-native';
// import {
//     Canvas,
//     BackdropFilter,
//     Fill,
//     Image,
//     ColorMatrix,
//     useImage,
//     BackdropBlur,
//   } from "@shopify/react-native-skia";


function SearchPage() {
    return ( 
        <SafeAreaView style={styles.container}>
            <View style={{ padding:10 }}>
                <TextInput
                style={styles.input}
                placeholder="Search ..."
                placeholderTextColor='black'
                keyboardType="default"
                />

        {/* <BackdropBlur blur={4} clip={{ x: 0, y: 128, width: 256, height: 128 }}>
            <Fill color="rgba(0, 0, 0, 0.2)" />
        </BackdropBlur> */}
            </View>
        </SafeAreaView>
       
     );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#141319",
        // backgroundColor: "red",
        color: "white",
    },
    input: {
        height: 50,
        borderRadius:8,
        padding:15,
        color:'black',
        fontSize:20,
        borderWidth: 1,
        backgroundColor:'#686779'
      },
})
export default SearchPage;
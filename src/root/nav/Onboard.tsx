import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens 
import Intro from '../../screens/introPage/Intro';
import SignInPage from '../../screens/Auth/SignUpPage';
import ViewArtise from '../../screens/ViewArtise';

const Stack = createNativeStackNavigator();


function Onboard() {
    return ( 
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown:false, gestureEnabled:false }} name="Intro" component={Intro} />
                <Stack.Screen options={{ headerShown:false }} name="SignInPage" component={SignInPage} />
                <Stack.Screen options={{ headerShown:false }} name="view" component={ViewArtise} />
            </Stack.Navigator>
        </NavigationContainer>
     );
}

export default Onboard;
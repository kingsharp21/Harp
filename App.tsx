import React, {useState} from 'react';
// import illustrator from './src/assets/img/home_illustrator.png';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Navs 
import User from './src/root/nav/User';
import Onboard from './src/root/nav/Onboard';
import Intro from './src/screens/introPage/Intro';
import LandingPage from './src/screens/landingPage/LandingPage';
import SearchPage from './src/screens/SearchPage';
import ViewArtise from './src/screens/ViewArtise';
import SignInPage from './src/screens/Auth/SignInPage';
import Play from './src/screens/Play';

const Stack = createNativeStackNavigator();

export default function App() {
  const [onboard, setOnboard] = useState(false)
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        {onboard?
        <>
          <Stack.Screen name="Intro" component={Intro} />
          
        </>
      :
      <>
        <Stack.Screen
          name="TabNavigator"
          component={Play}
          options={{ headerShown: false }}
          />
        {/* <Stack.Screen name="Home" component={LandingPage} /> */}
      </>
        
      }   
          <Stack.Screen name="SignInPage" component={SignInPage} />
          <Stack.Screen name="view" component={ViewArtise} options={{ headerShown: false }}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
    {/* {onboard?<User/>:<Onboard/>} */}
    </>
    // <Onboard/>
  );
}




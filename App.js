import React, { useEffect, useState } from 'react';
import Login from './screens/Login';
import Register from './screens/Register';
import Splash from './screens/Splash';
import Home from './screens/Home';
import * as SecureStore from 'expo-secure-store';


import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTapNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();
// const Tab = createBottomTapNavigator();

// function HomeTabs () {
//   return <Tab.Navigator>
//     <Tab.Screen 
//       name="home"
//       component={ Home }
//     /> 
//     <Tab.Screen 
//       name="addTask"
//       component={ Home }
//     />
//     <Tab.Screen 
//       name="profile"
//       component={ Home }
//     />
//   </Tab.Navigator>
// }

export default function App(props) {

  const [isLoggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    SecureStore.getItemAsync("token").then((data) => {
      console.log('data', data);
      if (data) {
        props.navigation.navigate("home")
      }
    }).catch((error) => {
      console.log('error', error.message);
    });
  }, [])

  return <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="splash"
        component={Splash}
      />

      
        <Stack.Screen
          name="login"
          component={Login}
        />

        <Stack.Screen
          name="register"
          component={Register}
        />

        <Stack.Screen
          name="home"
          component={Home}
        />


    </Stack.Navigator>
  </NavigationContainer>
}

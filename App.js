import React, { useEffect, useState } from 'react';
import Login from './screens/Login';
import Register from './screens/Register';
import Logout from './screens/Logout';
import Splash from './screens/Splash';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Categories from './screens/Categories';
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';


import { NavigationContainer, useLinkProps } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return <Tab.Navigator
    screenOptions={{
      headerShown: true,
      tabBarLabelStyle: {
        fontSize: 13,
        fontWeight: 'bold',
      },
      tabBarIconStyle: {
        display: 'none',
      },
      tabBarItemStyle: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      headerTitleAlign: "center",
    }}
  >
    <Tab.Screen
      name="home"
      component={Home}
      options={{
        title: 'Home',
        tabBarLabel: 'Home'
      }}
    />
    <Tab.Screen
      name="category"
      component={Categories}
      options={{
        title: 'category List',
        tabBarLabel: 'category'
      }}
    />
    <Tab.Screen
      name="addTask"
      component={Home}
      options={{
        title: 'Add New Task',
        tabBarLabel: 'New',
      }}
    />
    <Tab.Screen
      name="profile"
      component={Profile}
      options={{
        title: 'My Profile',
        tabBarLabel: 'Profile',
        headerStyle: {
          backgroundColor: '#555fd2',

        },
        headerTitleStyle: {
          color: 'white'
        },
        headerShadowVisible: false
      }}
    />
    <Tab.Screen
      name="Logout"
      component={Logout}
      options={{
        title: 'Logout',
        tabBarLabel: 'Logout'
      }}
    />
  </Tab.Navigator>
}

export default function App(props) {

  const [isLoggedIn, setLoggedIn] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     SecureStore.getItemAsync("token").then((data) => {
  //       if (data) {
  //         axios.defaults.headers.common['Authorization'] = "token " + data;
  //         props.navigation.navigate("splash")
  //       }
  //       setLoggedIn(false);
  //     });
  //   }, 2000);
  // });

  return <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {!isLoggedIn ?? <>
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
        /> :
        <Stack.Screen
          name="home"
          ScreenOptions={{
            headerShown: false
          }}
          component={Home}
        />
      </>}

      {/* <Stack.Screen
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
        ScreenOptions={{
          headerShown: false
        }}
        component={Home}
      />
      <Stack.Screen
        name="Logout"
        component={Logout}
      /> */}

      <Stack.Screen
        name="homeTabs"
        component={HomeTabs}
      />




    </Stack.Navigator>
  </NavigationContainer>
}

import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {MainFeed, Login, Profile, Camera, Register} from './screens/';

const Stack = createStackNavigator ();
const IntroStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default class InstaClone extends Component {

  createHomeStack = () =>(
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="PreLoad" children={this.IntroStack} />
          <Stack.Screen name="Bottom Tabs" children={this.createBottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
  )

  IntroStack = () =>{
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    )
  }
  
  createBottomTab = (props) => {
    return (
      <BottomTab.Navigator>
        <BottomTab.Screen name="Feed"  component={MainFeed} />
        <BottomTab.Screen name="Camera" component={Camera}  />
        <BottomTab.Screen name="Profile" component={Profile}  />
      </BottomTab.Navigator>
    );
  };


  render () {
    return (
      
        this.createHomeStack()
      
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});

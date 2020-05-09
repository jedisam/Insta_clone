import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {MainFeed, Login} from './screens/';

const Stack = createStackNavigator ();

export default class InstaClone extends Component {

  createHomeStack = () =>(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainFeed" component={MainFeed} />
      </Stack.Navigator>
    </NavigationContainer>
  )

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

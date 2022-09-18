import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{headerShown: false}} />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{headerShown: false}} />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/components/Navigation';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

import { NavigationContainer } from '@react-navigation/native';
//import NavigationContainer from 'react-native-navigation-container';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { AuthProvider } from './src/context/AuthContext';


export default function App() {
  
  return (
    <AuthProvider >
      <Navigation />
    </AuthProvider>
  ); 
}


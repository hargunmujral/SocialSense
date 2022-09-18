import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import { AuthContext } from '../context/AuthContext';

const WelcomeScreen = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}> Welcome to SocialSense </Text>
      </View>
        <View style={{margin: 50}} >
            <Image 
                source={require('../../assets/socialsenselogo.png')} 
                style={{width: 400, height: 400}} 
            />
        </View>
      <View style={styles.button}>
            <Button 
                color='white' 
                title="Let's get started!" 
                onPress={
                    () => {navigation.navigate('Home')}
                }
            />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        width: '80%',
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 15,
    },
    link: {
        color: 'blue',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        color: 'white',
    },
    title: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
});

export default WelcomeScreen
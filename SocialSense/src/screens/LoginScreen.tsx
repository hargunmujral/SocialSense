import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);  
  
  return (
    <View style={styles.container}>
      <View> 
        <TextInput 
            style={styles.input}
            value={email}
            placeholder="Email" 
            onChangeText={text => setEmail(text)}
        />
        <TextInput 
            style={styles.input}
            value={password}
            placeholder="Password" 
            onChangeText={text => setPassword(text)}
            secureTextEntry
        />
        <Button title="Login" />

        <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
                <Text style={styles.link}>Sign Up</Text>
            </TouchableOpacity>
        </View>
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
    }
});

export default LoginScreen
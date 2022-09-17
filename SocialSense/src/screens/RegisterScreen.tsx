import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  
  return (
    <View style={styles.container}>
      <View>
        <TextInput 
            style={styles.input}
            value={name}
            placeholder="Name" 
            onChangeText={text => setName(text)}
        /> 
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
        <View style={styles.button}>
            <Button title="Login"/>
        </View>
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
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
});

export default RegisterScreen
import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);  
  const val = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View> 
        <Text> {val}</Text>
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
            <Button color='white' title="Login" />
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

export default LoginScreen
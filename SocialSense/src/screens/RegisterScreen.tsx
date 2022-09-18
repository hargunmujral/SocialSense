import React, { useContext, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { AuthContext } from '../context/AuthContext';

const RegisterScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const {register} = useContext(AuthContext);

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
            <Button 
                color='white' 
                title="Register" 
                onPress={() => {
                    register(name, email, password);
                }}
            />
        </View>
        <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                <Text style={styles.link}>Login</Text>
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
        color: 'white',
    },
});

export default RegisterScreen
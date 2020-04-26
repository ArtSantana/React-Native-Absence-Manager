import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../component/Button';
import Icon from 'react-native-vector-icons/Fontisto';
import styles from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <View style={styles.viewInput}>
        <Icon 
          name="email" 
          size={24} 
          color="#C7C7CD"
          style={styles.iconInput}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Email"
          onChangeText={text => {setEmail(text)}}
        />
      </View>

      <View style={styles.viewInput}>
        <Icon 
          name="key" 
          size={24} 
          color="#C7C7CD"
          style={styles.iconInput}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => {setPassword(text)}}
        />
      </View>
      <TouchableOpacity style={styles.viewForgot}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <Button 
        text="Sign In"
        color="#AF52DE"
      />
      <View style={styles.footer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.textSignUp}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../component/Button';
import Icon from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase';
import styles from './styles';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function navigateSignUp() {
    navigation.navigate('Register');
  }

  function handleLogin() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {})
      .catch(error => setError(error.message))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.error}>{error}</Text>
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
          keyboardType="email-address"
          textAlignVertical="center"
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
        onPress={handleLogin}
      />
      <View style={styles.footer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={navigateSignUp}>
          <Text style={styles.textSignUp}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
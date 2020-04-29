import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Creators as authActions } from '../../store/ducks/auth';
import { View, Text, TextInput } from 'react-native';
import * as firebase from 'firebase';
import Button from '../../component/Button';
import Icon from 'react-native-vector-icons/Fontisto';
import styles from './styles';


export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  const [eyeColor, setEyeColor] = useState('#C7C7CD');

  const dispatch = useDispatch();

  function checkPasswords() {
    return password === confirmPassword ? true : false;
  }

  function togglePassword() {
    showPassword ? setEyeColor('#8E8E93') : setEyeColor('#C7C7CD');
    setShowPassword(!showPassword);
  }

  function registerUser() {
    if(!checkPasswords()) {
      setPasswordError('As senhas digitadas não coincidem!');
      return ;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        dispatch(authActions.login());
      })
      .catch(error => setError(error.message))
  }

  return (
    <View style={styles.container}>

      <Text style={styles.register}>Register</Text>
      <Text style={styles.error}>{error}</Text>
      <View style={styles.viewInput}>
        <Icon 
          name="person" 
          size={24} 
          color="#C7C7CD"
          style={styles.iconInput}
        />
        <TextInput 
          style={styles.textInput}
          placeholder="Username"
          textAlignVertical="center"
          autoCapitalize="none"
          onChangeText={text => {setUsername(text)}}
        />
      </View>

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
          textAlignVertical="center"
          keyboardType="email-address"
          autoCapitalize="none"
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
          style={styles.passwordInput}
          placeholder="Password"
          textAlignVertical="center"
          secureTextEntry={showPassword}
          autoCapitalize="none"
          onChangeText={text => {setPassword(text)}}
        />
        <Icon 
          name="eye"
          size={16}
          color={eyeColor}
          onPress={togglePassword}
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
          placeholder="Confirm Password"
          textAlignVertical="center"
          secureTextEntry={showPassword}
          autoCapitalize="none"
          onChangeText={text => {setConfirmPassword(text)}}
        />
      </View>
      <Text style={styles.error}>{passwordError}</Text>
      <View style={styles.button}>
        <Button 
          text="Sign Up"
          color="#AF52DE"
          onPress={registerUser}
        />
      </View>
    </View>
  );
}
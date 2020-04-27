import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Button from '../../component/Button';
import Icon from 'react-native-vector-icons/Fontisto';
import styles from './styles';


export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  function checkPasswords() {
    
  }

  return (
    <View style={styles.container}>

      <Text style={styles.register}>Register</Text>

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
          style={styles.textInput}
          placeholder="Password"
          textAlignVertical="center"
          secureTextEntry={true}
          onChangeText={text => {setPassword(text)}}
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
          secureTextEntry={true}
          onChangeText={text => {setConfirmPassword(text)}}
        />
      </View>
      <Text>{error}</Text>
      <View style={styles.button}>
        <Button 
          text="Sign Up"
          color="#AF52DE"
        />
      </View>
    </View>
  );
}
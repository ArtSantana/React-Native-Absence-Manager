import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {Creators as authActions} from '../../store/ducks/auth';
import Button from '../../component/Button';
import Icon from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import * as firebase from 'firebase';
import styles from './styles';

export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [eyeColor, setEyeColor] = useState('#C7C7CD');
  const [showPassword, setShowPassword] = useState(true);

  const dispatch = useDispatch();

  function handleFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    firebase
      .auth()
      .signInWithRedirect(provider)
      .then((result) => {
        const token = result.credential.accessToken;
        console.log(result.user);
      })
      .catch((e) => console.log(e));
  }

  function navigateSignUp() {
    navigation.navigate('Register');
  }

  function navigateForgotPassword() {
    navigation.navigate('ForgotPassword');
  }

  function togglePassword() {
    showPassword ? setEyeColor('#8E8E93') : setEyeColor('#C7C7CD');
    setShowPassword(!showPassword);
  }

  function handleLogin() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => dispatch(authActions.login()))
      .catch((error) => setError(error.message));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome</Text>
      <Text style={styles.error}>{error}</Text>
      <View style={styles.viewInput}>
        <Icon name="email" size={24} color="#C7C7CD" style={styles.iconInput} />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          keyboardType="email-address"
          textAlignVertical="center"
          autoCapitalize="none"
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
      </View>

      <View style={styles.viewInput}>
        <Icon name="key" size={24} color="#C7C7CD" style={styles.iconInput} />
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={showPassword}
          autoCapitalize="none"
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <Icon name="eye" size={16} color={eyeColor} onPress={togglePassword} />
      </View>

      <TouchableOpacity
        onPress={navigateForgotPassword}
        style={styles.viewForgot}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={{width: '100%', marginVertical: 8}}>
        <Button text="Sign In" color="#AF52DE" onPress={handleLogin} />
      </View>
      <View style={styles.footer}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={navigateSignUp}>
          <Text style={styles.textSignUp}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

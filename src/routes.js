import 'react-native-gesture-handler';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from './pages/Home';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';

export default function Routes() {
  const isSigned = useSelector(state => state.auth);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {
          isSigned ? (
            <>
              <Stack.Screen name="Home" component={Home}/>
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={Login}/>
              <Stack.Screen name="Register" component={Register}/> 
              <Stack.Screen name="ForgotPassword" component={ForgotPassword}/> 
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default function Button(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: props.color,
        alignSelf: 'center',
        width: '90%',
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        height: 48
    }}>
      <Text 
        style={{
          color: 'white',
          fontSize: 24,
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

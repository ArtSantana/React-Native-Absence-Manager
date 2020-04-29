import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default function Subject(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.subject}>
          {props.subject}
        </Text>
        <Text style={styles.teacher}>
          {props.teacher}
        </Text>
      </View>
      <Text style={styles.maxAbsences}>Máximo de faltas: {props.maxAbsences}</Text>
      <View style={styles.bottom}>
        <Text style={styles.absences}>Faltas: {props.absences}</Text>
        <Icon 
          name="md-arrow-round-forward" 
          size={20} 
          color="#AF52DE"
        />
      </View>
    </TouchableOpacity>
  );
}

import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Subject from '../../component/Subject';
import styles from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>notDP</Text>
      </View>
      <Subject 
        subject="Banco de dados"
        teacher="Luciana Potker"
        maxAbsences={20}
        absences={4}
      />
    </View>
  );
}


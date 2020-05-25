import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {Creators as AuthActions} from '../../store/ducks/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Subject from '../../component/Subject';
import styles from './styles';

export default function Home() {
  const subjects = useSelector((state) => state.subjects.subjects);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(subjects);
  }, []);

  function logout() {
    dispatch(AuthActions.logout());
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>notDP</Text>
        <TouchableOpacity onPress={logout}>
          <Icon name="logout" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={subjects}
        keyExtractor={(subjects) => String(subjects.name)}
        showsHorizontalScrollIndicator={false}
        renderItem={({item: subjects}) => (
          <Subject
            subject={subjects.name}
            teacher={subjects.teacher}
            maxAbsences={subjects.maxAbsences}
            absences={subjects.totalAbsences}
          />
        )}
      />
      <TouchableOpacity
        style={styles.plusIcon}
        onPress={() => navigation.navigate('CreateSubject')}>
        <AntIcon name="pluscircle" size={40} color="#AF52DE" />
      </TouchableOpacity>
    </View>
  );
}

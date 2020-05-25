import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {Creators as SubjectActions} from '../../store/ducks/subjects';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

export default function CreateSubject() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [teacher, setTeacher] = useState('');
  const [maxAbsences, setMaxAbsences] = useState(0);
  const [absences, setAbsences] = useState(0);

  function createSubject() {
    if (name == '') return;
    dispatch(SubjectActions.add(name, teacher, maxAbsences, absences));
    console.log('dispatch');
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={32} color="#AF52DE" />
        </TouchableOpacity>
        <Text style={styles.title}> Criar Disciplina</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.viewInput}>
          <Text style={styles.labelInput}>Disciplina</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Banco de dados I"
            onChangeText={(text) => setName(text)}
            value={name}
          />
        </View>

        <View style={styles.viewInput}>
          <Text style={styles.labelInput}>Professor</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Seu Creysson"
            onChangeText={(text) => setTeacher(text)}
            value={teacher}
          />
        </View>

        <Text style={styles.labelNumber}>Máximo de faltas:</Text>
        <View style={styles.numberInput}>
          <TouchableOpacity
            onPress={() => {
              if (maxAbsences < 1) return;
              setMaxAbsences(maxAbsences - 1);
            }}>
            <Icon name="minus" size={24} color="#8E8E98" />
          </TouchableOpacity>
          <Text style={styles.number}>{maxAbsences}</Text>
          <TouchableOpacity
            onPress={() => {
              setMaxAbsences(maxAbsences + 1);
            }}>
            <Icon name="plus" size={24} color="#8E8E98" />
          </TouchableOpacity>
        </View>

        <Text style={styles.labelNumber}>Faltas:</Text>
        <View style={styles.numberInput}>
          <TouchableOpacity
            onPress={() => {
              if (absences < 1) return;
              setAbsences(absences - 1);
            }}>
            <Icon name="minus" size={24} color="#8E8E98" />
          </TouchableOpacity>
          <Text style={styles.number}>{absences}</Text>
          <TouchableOpacity
            onPress={() => {
              setAbsences(absences + 1);
            }}>
            <Icon name="plus" size={24} color="#8E8E98" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={createSubject}>
          <Text style={styles.textButton}>Criar Disciplina</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    width: '100%',
    paddingHorizontal: 4,
    marginTop: 8,
    marginBottom: 64,
  },

  title: {
    alignSelf: 'center',
    position: 'absolute',
    top: 0,
    color: '#8E8E98',
    fontWeight: 'bold',
    fontSize: 24,
  },

  viewInput: {
    marginTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#D1D1D6',
    width: '80%',
    alignSelf: 'center',
  },

  labelInput: {
    color: '#8E8E98',
    fontSize: 20,
  },

  input: {
    width: '90%',
  },

  numberInput: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#D1D1D6',
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 32,
    paddingVertical: 4,
    paddingHorizontal: 4,
  },

  number: {
    color: '#8E8E98',
    fontWeight: 'bold',
    fontSize: 14,
  },

  labelNumber: {
    marginTop: 24,
    color: '#8E8E98',
    fontSize: 16,
    marginLeft: '10%',
    marginBottom: 8,
  },

  button: {
    marginTop: 64,
    backgroundColor: '#AF52DE',
    borderRadius: 100,
    alignSelf: 'center',
    alignItems: 'center',
    width: '80%',
    paddingHorizontal: '10%',
    paddingVertical: 8,
  },

  textButton: {
    color: 'white',
    fontSize: 16,
  },
});

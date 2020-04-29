import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  register: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#8E8E93',
    marginBottom: 48
  },

  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,    
    width: '85%',
    borderBottomWidth: 1,
    borderBottomColor: '#C7C7CD',
    marginBottom: 16,
    justifyContent: 'space-between',
  },

  passwordInput: {
    width: '80%'
  },

  textInput: {
    width: '100%'
  },

  iconInput: {
    marginRight: 8,
  },

  button: {
    width: '100%',
    marginTop: 32
  },

  error: {
    color: 'red',
  }
})
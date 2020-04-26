import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcome: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#8E8E93',
    position: 'absolute',
    bottom: '80%'
  },

  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,    
    width: '85%',
    borderBottomWidth: 1,
    borderBottomColor: '#C7C7CD',
    marginBottom: 16,
  },

  iconInput: {
    marginRight: 8,
  },

  forgot: {
    fontWeight: "bold",
    color: '#8E8E93'
  },

  viewForgot: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginRight: '10%',
    marginBottom: 32
  },

  footer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    marginBottom: 24
  },

  textSignUp: {
    fontWeight: 'bold',
    color: '#AF52DE'
  }
})
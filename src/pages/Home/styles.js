import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#AF52DE',
    paddingHorizontal: 8,
  },

  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
  },

  plusIcon: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    marginBottom: 16,
  },
});

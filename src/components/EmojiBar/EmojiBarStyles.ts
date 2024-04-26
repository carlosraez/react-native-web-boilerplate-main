import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 8, 
    paddingVertical: 4
  },
  icon: {
    width: 24,
    height: 16, 
    marginRight: 8, 
  },
  text: {
    fontSize: 16,
  },
});
import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#fff', 
    marginBottom: 24, 
  },
  cardList: {
    backgroundColor: '#fff', 
    marginBottom: 24,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardListRight: {
    backgroundColor: '#fff', 
    marginBottom: 24,
    display: 'flex',
    flexDirection: 'row-reverse', 
    alignItems: 'center',
    justifyContent: 'center'
  },
  bodyTwoComponents: {
    backgroundColor: '#fff', 
    marginBottom: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  bodyTwoComponentsRight: {
    backgroundColor: '#fff', 
    marginBottom: 24,
    display: 'flex',
    flexDirection: 'row-reverse', 
    justifyContent: 'center'
  },
  withEmojiVertical: {
    backgroundColor: '#fff', 
    marginBottom: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  imageList: {
    width: 164, 
    height: 125, 
    borderRadius: 5,
    marginRight: 16,
  },
  image: {
    width: '100%', 
    height: 193, 
    borderRadius: 5,
    marginBottom: 16,
  },
  textContainer: {
    flex: 1,
  },
  containerSpaceBetween: {
    flex: 1,
    justifyContent: 'space-between'
  },
})



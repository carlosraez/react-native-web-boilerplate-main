import { Flex } from 'native-base';
import { StyleSheet } from 'react-native';

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
  authorContainer: {
    display: 'flex',
    marginBottom: 16,
    flexDirection: 'row',
  },
  title: {
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 8, 
  },
  listTitle: {
    fontSize: 14, 
    fontWeight: 'bold', 
  },
  subtitle: {
    fontSize: 14, 
    fontWeight: 'bold',
  },
  city: {
    marginLeft: 4,
    fontSize: 14, 
    color: 'grey', 
  },
  horizontalBarContainerBar: {
    marginLeft: 16,
    marginTop: -5,
  },
  BarListContainer: {
    justifyContent: 'space-between',
  },
})



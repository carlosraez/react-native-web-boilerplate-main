import { StyleSheet, TextStyle } from 'react-native';

const baseMenuText: TextStyle = {
  fontWeight: 'bold',
  fontSize: 16,
};


export default StyleSheet.create({
  menuDropdown: {
    marginTop: 8
  },
  menuTextOpen: {
    ...baseMenuText,
    textDecorationLine: 'underline', 
  },
  menuTextClosed: {
    ...baseMenuText,
    textDecorationLine: 'none',  
  },
  menuItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  itemText: {
    fontSize: 16,
  },
  menuTitleContainer: {
    flexDirection: 'row',
  },
  arrow: {
    fontSize: 16,
    paddingTop: 4,
    marginLeft: 4,
  },
  containerMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

});

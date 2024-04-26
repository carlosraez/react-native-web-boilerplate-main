import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    menuText: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    menuItem: {
        paddingVertical: 17.5,
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
    containerMenuUserConfig: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    switch: {
        width: 42, 
        height: 24, 
        borderRadius: 15, 
        borderColor: '#d6d6d6', 
        borderWidth: 2,
        justifyContent: 'center',
        padding: 5, 
      },
      switchOn: {
        backgroundColor: '#d6d6d6', 
      },
      switchOff: {
        backgroundColor: '#fffff', 
      },
      toggleThumb: {
        width: 16.5, 
        height: 16.5, 
        borderRadius: 10, 
      },
      thumbOn: {
        alignSelf: 'flex-end', 
        backgroundColor: 'white', 
      },
      thumbOff: {
        alignSelf: 'flex-start', 
        backgroundColor: '#d6d6d6', 
      },
      containerAuthors: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
      },
      image: {
        width: 40, 
        height: 40, 
        borderRadius: 25, 
        backgroundColor: '#c4c4c4', 
      },
      textContainer: {
        marginLeft: 8, 
      },
      name: {
        fontWeight: 'bold',
        fontSize: 18, 
      },
      subtitle: {
        color: '#6e6e6e',
        fontSize: 14, 
      },
      row: {
        flexDirection: 'row', 
        alignItems: 'center', 
      },
      followText: {
        marginRight: 8, 
      },
});
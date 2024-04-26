import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronDownIcon, ChevronUpIcon } from 'native-base';

import styles from './MenuDropDownStyles'
import { MenuDropDownProps } from './MenuDropDownInterfaces';

export const MenuDropDown: React.FC<MenuDropDownProps> = ({
    items = [],
    onItemSelected = () => { },
    nameMenu = 'Sport',
     }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
   
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const getTitleMenu = () => (
        <TouchableOpacity style={styles.menuTitleContainer} onPress={toggleMenu}>
            <Text style={isMenuOpen ? styles.menuTextOpen : styles.menuTextClosed}>{nameMenu}</Text>
            <Text style={styles.arrow}>{getIconArrow(isMenuOpen)}</Text>
        </TouchableOpacity>
    )

    const getIconArrow = (isMenuOpen: boolean) => {
        return isMenuOpen ?
            <ChevronUpIcon size="4" mt="0" color="emerald.500" /> :
            <ChevronDownIcon size="4" mt="0" color="emerald.500" />;
    };

    const getLabelItemMenu = (item: string, index: number) => {
        return (
            <TouchableOpacity key={index} style={styles.menuItem} onPress={() => onItemSelected(item)}>
                <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
        )
    }

    const getListItems = () => {
        return isMenuOpen && items.map((item: string, index: number) => (
            <View style={styles.containerMenu}>
                {getLabelItemMenu(item, index)}
            </View>
        ))
    }

    return (
        <View>
            {getTitleMenu()}
            <View style={styles.menuDropdown}>
                {getListItems()}
            </View>
        </View>
    );
};





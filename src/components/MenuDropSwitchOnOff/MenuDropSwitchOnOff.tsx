import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { ChevronDownIcon, ChevronUpIcon } from 'native-base';

import styles from './MenuDropSwitchOnOffStyles'
import { Author, MenuDropSwitchOnOffProps } from './MenuDropSwitchOnOffInterface';
import { ItemsSwitch } from '../ItemsSwitch/ItemsSwitch';

export const MenuDropSwitchOnOff: React.FC<MenuDropSwitchOnOffProps> = ({
    items = [],
    nameMenu = 'Sport',
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [switchStates, setSwitchStates] = useState<boolean[]>(new Array(items.length).fill(false));

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleSwitch = (index: number) => {
        setSwitchStates(switchStates.map((state, i) => (i === index ? !state : state)));
    };

    const getTitleMenu = () => (
        <TouchableOpacity style={styles.menuTitleContainer} onPress={toggleMenu}>
            <Text style={styles.menuText}>{nameMenu}</Text>
            <Text style={styles.arrow}>{getIconArrow(isMenuOpen)}</Text>
        </TouchableOpacity>
    )

    const getIconArrow = (isMenuOpen: boolean) => {
        return isMenuOpen ?
            <ChevronUpIcon size="4" mt="0" color="emerald.500" /> :
            <ChevronDownIcon size="4" mt="0" color="emerald.500" />;
    };


    const getListItems = () => {
        return isMenuOpen && items.map((item, index) => {
            return (
                <ItemsSwitch item={item} index={index} switchStates={switchStates} toggleSwitch={toggleSwitch} />
            );
        });
    };

    return (
        <View>
            {getTitleMenu()}
            <View>
                {getListItems()}
            </View>
        </View>
    );
};








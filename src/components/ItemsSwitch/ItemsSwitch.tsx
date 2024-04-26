import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './ItemsSwitchStyles'
import { Author, ItemsSwitchProps } from './itemsSwitchInterface';

export const ItemsSwitch: React.FC<ItemsSwitchProps> = ({
    item = 'Default Item',
    index = 0,
    switchStates = [],
    toggleSwitch = () => { },
    isUnique = false,
    toggleUniqueSwitch,
}) => {
    const [active, setActive] = useState(switchStates ? switchStates[index] : false);

    const getLabelItemMenu = (item: string, index: number) => {
        return (
            <View key={index} style={styles.menuItem} >
                <Text style={styles.itemText}>{item}</Text>
            </View>
        )
    }

    const getAuthorSign = ({ name, subtitle, imageUri }: Author) => {
        return (
            <View style={styles.containerAuthors}>
                <Image source={{ uri: imageUri }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
            </View>
        );
    }

    const getSwichtOnOff = (index: number) => {
        const onToggle = (index: number) => {
            const newState = !active;;
            setActive(newState);

            isUnique  && toggleUniqueSwitch ? toggleUniqueSwitch(newState) : toggleSwitch(index);
        };

        return (
            <View style={styles.row}>
                {isUnique && <Text style={styles.followText}>Segueix</Text>}
                <TouchableOpacity
                    style={[styles.switch, active ? styles.switchOn : styles.switchOff]}
                    onPress={() => onToggle(index)}
                    activeOpacity={0.7}
                >
                    <View
                        style={[styles.toggleThumb, active ? styles.thumbOn : styles.thumbOff]}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.containerMenuUserConfig} >
            {!isUnique ? typeof item === 'string' ? getLabelItemMenu(item, index) : getAuthorSign(item) : null}
            {getSwichtOnOff(index)}
        </View>
    );
}
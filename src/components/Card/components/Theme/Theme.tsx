import React from 'react';
import { Text, } from 'react-native';

import { ThemeProps } from './ThemeInterface';
import styles from './ThemeStyle'


export const Theme: React.FC<ThemeProps> = ({ theme }) => {
    return <Text style={styles.text}>{theme}</Text>;
};
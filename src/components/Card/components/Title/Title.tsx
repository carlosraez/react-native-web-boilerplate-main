
import React from 'react';

import { Text,  } from 'react-native';
import { TitleProps } from './TitleInterface';

import styles from './TitleStyle'


export  const Title: React.FC<TitleProps> = ({ title, imagePosition }) => {
    return <Text style={imagePosition ? styles.listTitle : styles.title }>{title}</Text>;
  };

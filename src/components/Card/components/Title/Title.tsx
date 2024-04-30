
import React from 'react';

import { Text,  } from 'react-native';
import { TitleProps } from './TitleInterface';
import styles from './TitleStyle'

export  const Title: React.FC<TitleProps> = ({ title, imagePositionLateral }) => { 
    return <Text style={imagePositionLateral ? styles.listTitle : styles.title }>{title}</Text>;
  };

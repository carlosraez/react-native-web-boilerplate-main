
import React from 'react';

import { Text,  } from 'react-native';
import { TitleProps } from './TitleInterface';
import styles from './TitleStyle'

export  const Title: React.FC<TitleProps> = ({ title, imagePositionLateral, textNormal }) => { 
    return <Text style={imagePositionLateral ? (textNormal ? styles.listTitleTextNormal : styles.listTitle) : styles.title }>{title}</Text>;
  };

import React from 'react';
import { View, Image, TouchableOpacity, } from 'react-native';

import styles from './CardStyles'
import { CardProps } from './CardInterface';

const Card: React.FC<CardProps> = ({
  children,
  imagePosition,
  imageUri,
  onImagePress,
  bodyComponents,
  imageSmall
}) => {
  const styleImagePosition = imagePosition === 'left' ?
    (imageSmall ? styles.imageListSmall : styles.imageList) :
    imagePosition === 'right' ?
      (imageSmall ?
        styles.imageListSmallRight : styles.imageListRight)
      : styles.image

  const styleContainer =
    imagePosition === 'left'
      ? (bodyComponents === 2
        ? styles.bodyTwoComponents
        : styles.cardList)
      : imagePosition === 'right'
        ? (bodyComponents === 2
          ? styles.bodyTwoComponentsRight
          : styles.cardListRight)
        : styles.card;

  const getImage = () => (imageUri && (<Image source={{ uri: imageUri }} style={styleImagePosition} />));

  const getChildren = () => {
    if (bodyComponents === 2) {
      return (<View style={styles.containerSpaceBetween}>{children}</View>);
    }

    return children;
  };

  return (
    <TouchableOpacity onPress={onImagePress} >
      <View style={styleContainer}>
        {(imagePosition === 'top' || imagePosition === 'left' || imagePosition === 'right') && getImage()}
        {getChildren()}
        {imagePosition === 'bottom' && getImage()}
      </View>
    </TouchableOpacity>
  );
};

export default Card;
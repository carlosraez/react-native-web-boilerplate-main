// Card.tsx
import React from 'react';
import { View, Image, TouchableOpacity, } from 'react-native';

import styles from './CardStyles'
import { CardProps } from './CardInterface';

const Card: React.FC<CardProps> = ({
  children,
  imagePosition,
  imageUri,
  onImagePress,
  bodyComponents
}) => {
  const styleImagePosition = imagePosition === 'left' ? styles.imageList : styles.image

  const getImage = () => (
    imageUri && (
      <TouchableOpacity onPress={onImagePress}>
        <Image source={{ uri: imageUri }} style={styleImagePosition} />
      </TouchableOpacity>
    )
  );

  const styleContainer = imagePosition === 'left' ? (bodyComponents === 2 ? styles.bodyTwoComponents : styles.cardList) : styles.card
  const bodyStyle = bodyComponents === 2 ? styles.bodyTwoComponents : null

  const getChildren = () => {
    if (bodyComponents === 2) {
      return (<View style={styles.containerTextWithEmoji}>{children}</View>);
    }

    return children;
  };


  return (
    <View style={styleContainer}>
      {(imagePosition === 'top' || imagePosition === 'left') && getImage()}
      {getChildren()}
      {imagePosition === 'bottom' && getImage()}
    </View>
  );
};

export default Card;
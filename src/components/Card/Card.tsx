// Card.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';

import styles from './CardStyles'
import { CardProps } from './CardInterface';
import { EmojiBar } from '../EmojiBar/EmojiBar';

const Card: React.FC<CardProps> = ({
  children,
  imagePosition,
  imageUri,
  onImagePress,
  showActionIcon,
  positionActionBar,
  isList
}) => {
  const styleImagePosition = imagePosition === 'left' ? styles.imageList : styles.image

  const getImage = () => (
    imageUri && (
      <TouchableOpacity onPress={onImagePress}>
        <Image source={{ uri: imageUri }} style={styleImagePosition} />
      </TouchableOpacity>
    )
  );


  const getTitle = () => (
    <>
      <Text style={isList ? styles.listTitle : styles.title}>{title}</Text>
      {isList && showActionIcon &&
        (<View style={styles.BarListContainer}>
          {getEmojiBar()}
        </View>
        )}
    </>
  );

  const getEmojiHorizontal = () => {
    return positionActionBar === 'horizontal' && (
      <View style={styles.horizontalBarContainerBar}>
        {!isList && getEmojiBar()}
      </View>
    )
  }

  const getAuthor = () => {
    return !isList && (
      <View style={styles.authorContainer}>
        {author && <Text style={styles.subtitle}>{author}</Text>}
        {city && <Text style={styles.city}>{city}</Text>}
        {getEmojiHorizontal()}
      </View>
    );
  }

  const getEmojiBar = () => {
    return showActionIcon && (
      <EmojiBar clapsCountInitial={0} smilesCountInitial={0} />
    );
  }; 



  const styleContainer =  imagePosition === 'left' ?  styles.cardList : styles.card 

  const styleContainerText = isList && positionActionBar === 'Horizontal' ? styles.containerTextWithEmoji : styles.textContainer

  return (
    <View style={styleContainer}>
      {(imagePosition === 'top' || imagePosition === 'left') && getImage() }
      {children}
      {imagePosition === 'bottom' && getImage()}
    </View>
  );
};

export default Card;

/*isList
    ? (positionActionBar === 'Horizontal' ? styles.withEmojiVertical : styles.cardList)
    : styles.card;*/

//card
//author
//imagePosition top right left botton

/*
Card
 {children}
 imagen
 bloque 
 </Card>
 <View style={styleContainer}>
      {getImage()}
      <View style={styleContainerText}>
        {getTitle()}
        {getAuthor()}
      </View>
      {positionActionBar === 'Vertical' && getEmojiBar()}
    </View>
 
 */
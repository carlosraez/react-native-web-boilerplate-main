// Card.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, } from 'react-native';

import styles from './CardStyles'
import { CardProps } from './CardInterface';
import { EmojiBar } from '../EmojiBar/EmojiBar';

const Card: React.FC<CardProps> = ({
  title,
  author,
  imageUri,
  onImagePress,
  showActionIcon,
  positionActionBar,
  city,
  isList
}) => {

  const getImage = () => (
    imageUri && (
      <TouchableOpacity onPress={onImagePress}>
        <Image source={{ uri: imageUri }} style={isList ? styles.imageList : styles.image} />
      </TouchableOpacity>
    )
  );

  console.log(isList);


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

  const getAuthor = () => (
    <View style={!isList && styles.authorContainer}>
      {author && <Text style={styles.subtitle}>{author}</Text>}
      {city && <Text style={styles.city}>{city}</Text>}
      {positionActionBar === 'horizontal' && (
        <View style={styles.horizontalBarContainerBar}>
          {!isList && getEmojiBar()}
        </View>
      )}
    </View>
  );

  const getEmojiBar = () => {
    return showActionIcon && (
      <EmojiBar clapsCountInitial={0} smilesCountInitial={0} />
    );
  };

  return (
    <View style={isList ? styles.cardList : styles.card}>
      {getImage()}
      <View style={styles.textContainer}>
        {getTitle()}
        {getAuthor()}
      </View>
      {positionActionBar === 'Vertical' && getEmojiBar()}
    </View>
  );
};

export default Card;

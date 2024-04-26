import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './EmojiBarStyles';
import { EmojiBarProps } from './EmojiBarInterface';
import { EmojiButton } from './EmojiButton';

export const EmojiBar: React.FC<EmojiBarProps> = ({
  clapsCountInitial = 0,
  smilesCountInitial = 0
}) => {
  const [clapsCount, setClapsCount] = useState(clapsCountInitial);
  const [smilesCount, setSmilesCount] = useState(smilesCountInitial);

  const handleClapPress = () => {
    setClapsCount(prevCount => prevCount + 1);
  };

  const handleSmilePress = () => {
    setSmilesCount(prevCount => prevCount + 1);
  };
  
  return (
    <View style={styles.container}>
      <EmojiButton emoji="👏" count={clapsCount} onPress={handleClapPress} />
      <EmojiButton emoji="😊" count={smilesCount} onPress={handleSmilePress} />
    </View>
  );
};
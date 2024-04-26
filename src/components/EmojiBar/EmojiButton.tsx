// EmojiButton.tsx
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './EmojiBarStyles';
import { EmojiButtonProps } from './EmojiBarInterface';

export const EmojiButton: React.FC<EmojiButtonProps> = ({ emoji, count, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.icon}>{emoji}</Text>
      <Text style={styles.text}>{count}</Text>
    </TouchableOpacity>
  );
};


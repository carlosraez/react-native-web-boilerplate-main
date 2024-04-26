import React from 'react';
import { View, Text } from 'react-native';
import { ChevronUpIcon } from 'native-base';

import styles from './QuoteTextStyles'
import { QuoteTextInterface } from './QuoteTextInterface';

export const QuoteText: React.FC<QuoteTextInterface> = ({ text }) => {
  return (
    <View>
      <ChevronUpIcon size="4" mt="0.5" color="emerald.500" />
      <Text style={styles.quoteText}>{text}</Text>
    </View>
  );
};
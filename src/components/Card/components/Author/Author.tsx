
import React from 'react';
import { Text, View, } from 'react-native';

import styles from './AuthorStyle'
import { EmojiBar } from '../../../EmojiBar/EmojiBar';
import { AuthorProps } from './AuthorInterface';

export const Author: React.FC<AuthorProps> = ({ author, city, emojibarRigth, imagePositionLateral }) => {

    const getEmojiHorizontal = () =>
    (
        <View style={styles.horizontalBarContainerBar}>
            <EmojiBar clapsCountInitial={0} smilesCountInitial={0} />
        </View>
    )


    return (<View style={imagePositionLateral ? styles.authorContainerList : styles.authorContainer}>
        {author && <Text style={styles.subtitle}>{author}</Text>}
        {city && <Text style={styles.city}>{city}</Text>}
        {emojibarRigth && getEmojiHorizontal()}
    </View>
    );
};
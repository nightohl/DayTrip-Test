import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

export function InfoTags({tagList}: {tagList: string[]}) {
  return (
    <>
      {tagList.map((tag, i) => (
        <View style={styles.tag} key={`tag${i}`}>
          <Text>{tag}</Text>
        </View>
      ))}
    </>
  );
}

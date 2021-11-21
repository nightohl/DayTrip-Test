import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export function Description({description}: {description: string}) {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

export const DescriptionSkeleton = () => (
  <View style={styles.descriptionContainer}>
    <SkeletonPlaceholder>
      <View style={styles.textSkeleton} />
      <View style={[styles.textSkeleton, {width: 250}]} />
      <View style={[styles.textSkeleton, {width: 130}]} />
    </SkeletonPlaceholder>
  </View>
);

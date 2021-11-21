import React from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/SimpleLineIcons';
import {styles} from './styles';

import * as Animatable from 'react-native-animatable';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export function PlaceDetailTitle({
  title,
  subInfos,
}: {
  title: string;
  subInfos: string[];
}) {
  return (
    <Animatable.View
      style={styles.titleContainer}
      animation="fadeIn"
      duration={1500}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.subInfo}>
        <Ionicons name="location-pin" size={15} />
        {subInfos.map((info, i) => (
          <Text key={`info-${i}`} style={styles.infoText}>
            {info}
          </Text>
        ))}
      </View>
    </Animatable.View>
  );
}
export const PlaceDetailTitleSkeleton = () => (
  <View style={styles.titleContainer}>
    <SkeletonPlaceholder>
      <View style={styles.skeletonTitle} />
      <View style={styles.subInfo}>
        <View style={styles.skeletonSubInfo1} />
        <View style={styles.skeletonSubInfo2} />
      </View>
    </SkeletonPlaceholder>
  </View>
);

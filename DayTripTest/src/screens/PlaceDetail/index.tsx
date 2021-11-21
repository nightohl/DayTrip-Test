import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/SimpleLineIcons';
import {styles} from './styles';
import {PlaceDetailProps} from '@navigators/Stack/types';

import * as Animatable from 'react-native-animatable';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import {PlaceInfoTab} from '@navigators/Tab';

export function PlaceDetail({}: PlaceDetailProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  return (
    <View style={styles.rootContainer}>
      {isLoading ? (
        <TitleSkeleton />
      ) : (
        <Animatable.View
          style={styles.titleContainer}
          animation="fadeIn"
          duration={1500}>
          <Text style={styles.title}>더반올가닉</Text>
          <View style={styles.subInfo}>
            <Ionicons name="location-pin" size={15} />
            <Text style={styles.infoText}>경기도 | 이천시</Text>
            <Text style={styles.infoText}>카페</Text>
          </View>
        </Animatable.View>
      )}
      <PlaceInfoTab />
    </View>
  );
}

const TitleSkeleton = () => (
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

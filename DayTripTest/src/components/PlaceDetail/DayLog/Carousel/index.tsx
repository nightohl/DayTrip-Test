import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import {styles} from './styles';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export function Carousel({imageUris}: {imageUris: string[]}) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.carousel}>
      {imageUris &&
        imageUris.map((uri, i) => (
          <Image
            key={`carousel-${i}`}
            source={{uri: uri}}
            style={styles.carouselImg}
          />
        ))}
    </ScrollView>
  );
}

export const CarouselSkeleton = () => (
  <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.carousel}>
    <SkeletonPlaceholder>
      <View style={styles.carouselImg} />
    </SkeletonPlaceholder>
    <SkeletonPlaceholder>
      <View style={styles.carouselImg} />
    </SkeletonPlaceholder>
    <SkeletonPlaceholder>
      <View style={styles.carouselImg} />
    </SkeletonPlaceholder>
  </ScrollView>
);

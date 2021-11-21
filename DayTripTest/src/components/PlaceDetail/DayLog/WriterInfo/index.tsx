import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export function WriterInfo({
  name,
  writeDate,
}: {
  name: string;
  writeDate: string;
}) {
  return (
    <View style={styles.writerInfoRootContainer}>
      {/* 프로필 사진 */}
      <Image source={require('@assets/main.jpg')} style={styles.profile} />
      {/* 사용자 이름 */}
      <View style={styles.writeInfoContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
      {/* 게시 날짜 */}
      <View style={styles.writeInfoContainer}>
        <Text style={styles.writeDate}>{writeDate}</Text>
      </View>
    </View>
  );
}

export const WriterInfoSkeleton = () => (
  <SkeletonPlaceholder>
    {/* 게시 정보 */}
    <View style={styles.writerInfoRootContainer}>
      {/* 프로필 사진 */}
      <View style={styles.profile} />
      {/* 사용자 이름 */}
      <View style={styles.writeInfoContainer}>
        <View style={styles.name} />
      </View>
      {/* 게시 날짜 */}
      <View style={styles.writeInfoContainer}>
        <View style={styles.writeDate} />
      </View>
    </View>
  </SkeletonPlaceholder>
);

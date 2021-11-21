import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {DayLogProps} from '@navigators/Tab/types';
import {styles} from './styles';

import * as Animatable from 'react-native-animatable';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export function DayLog({}: DayLogProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  const description =
    '바이닐과 디자인 서적을\n이용할 수 있는 문화 도서관.\n수성못의 새로운 공간 닷라이브러리.\n';

  return (
    <ScrollView style={styles.rootContainer}>
      {isLoading ? (
        <DayLogSkel />
      ) : (
        <Animatable.View animation="fadeIn" duration={1500}>
          {/* 게시 정보 */}
          <View style={styles.writerInfoRootContainer}>
            {/* 프로필 사진 */}
            <Image
              source={require('@assets/main.jpg')}
              style={styles.profile}
            />
            {/* 사용자 이름 */}
            <View style={styles.writeInfoContainer}>
              <Text style={styles.name}>night-ohl</Text>
            </View>
            {/* 게시 날짜 */}
            <View style={styles.writeInfoContainer}>
              <Text style={styles.writeDate}>2021.11.21.</Text>
            </View>
          </View>

          {/* 이미지 */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.carousel}>
            <Image
              source={require('@assets/main.jpg')}
              style={styles.carouselImg}
            />
            <Image
              source={require('@assets/main.jpg')}
              style={styles.carouselImg}
            />
            <Image
              source={require('@assets/main.jpg')}
              style={styles.carouselImg}
            />
            <Image
              source={require('@assets/main.jpg')}
              style={styles.carouselImg}
            />
          </ScrollView>

          {/* 하단 설명글 */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{description}</Text>
          </View>
        </Animatable.View>
      )}
    </ScrollView>
  );
}

const DayLogSkel = () => (
  <ScrollView style={styles.rootContainer}>
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

    {/* 이미지 */}
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

    {/* 하단 설명글 */}
    <View style={styles.descriptionContainer}>
      <SkeletonPlaceholder>
        <View style={styles.textSkeleton} />
        <View style={[styles.textSkeleton, {width: 250}]} />
        <View style={[styles.textSkeleton, {width: 130}]} />
      </SkeletonPlaceholder>
    </View>
  </ScrollView>
);

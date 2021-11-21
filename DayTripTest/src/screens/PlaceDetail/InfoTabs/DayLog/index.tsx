import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {DayLogProps} from '@navigators/Tab/types';
import {styles} from './styles';

import * as Animatable from 'react-native-animatable';

import {
  Carousel,
  CarouselSkeleton,
  Description,
  DescriptionSkeleton,
  WriterInfo,
  WriterInfoSkeleton,
} from '@components/PlaceDetail/DayLog';

export function DayLog({}: DayLogProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  const description =
    '바이닐과 디자인 서적을\n이용할 수 있는 문화 도서관.\n수성못의 새로운 공간 닷라이브러리.\n';

  const carouselImgs = [
    'https://i.ytimg.com/vi/yJR3i1c42i8/maxresdefault.jpg',
    'https://i.pinimg.com/originals/51/b0/82/51b08285a6799c63fa0eff6fe835eec9.jpg',
    'https://five.psbdigital.ca/wp-content/uploads/2020/03/dasa-book-cafe.jpg',
  ];

  return (
    <ScrollView style={styles.rootContainer}>
      {isLoading ? (
        <DayLogSkel />
      ) : (
        <Animatable.View animation="fadeIn" duration={1500}>
          {/* 게시 정보 */}
          <WriterInfo name="night-ohl" writeDate="2021.11.21." />

          {/* 이미지 */}
          <Carousel imageUris={carouselImgs} />

          {/* 하단 설명글 */}
          <Description description={description} />
        </Animatable.View>
      )}
    </ScrollView>
  );
}

const DayLogSkel = () => (
  <ScrollView style={styles.rootContainer}>
    {/* 게시 정보 */}
    <WriterInfoSkeleton />

    {/* 이미지 */}
    <CarouselSkeleton />

    {/* 하단 설명글 */}
    <DescriptionSkeleton />
  </ScrollView>
);

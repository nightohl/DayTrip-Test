import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {PlaceDetailProps} from '@navigators/Stack/types';

import {PlaceInfoTab} from '@navigators/Tab';
import {
  PlaceDetailTitle,
  PlaceDetailTitleSkeleton,
} from '@components/PlaceDetail';

export function PlaceDetail({}: PlaceDetailProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  return (
    <View style={styles.rootContainer}>
      {isLoading ? (
        <PlaceDetailTitleSkeleton />
      ) : (
        <PlaceDetailTitle
          title="더반올가닉"
          subInfos={['경기도 | 이천시', '카페']}
        />
      )}
      <PlaceInfoTab />
    </View>
  );
}

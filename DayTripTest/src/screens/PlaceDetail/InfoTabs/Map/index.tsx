import React from 'react';
import {View, Text, Linking} from 'react-native';
import {MapProps} from '@navigators/Tab/types';
import {styles} from './styles';
import {Tag, AddrInfo} from './types';

import {InfoTags, MapInfo, MapView} from '@components/PlaceDetail/Map';

export function Map({}: MapProps) {
  const tagList: Tag = ['카페', '야외 / 공원', '테라스'];

  const addrInfo: AddrInfo = {
    addr: '경기 이천시 부빌읍 부발중앙로221번길 89',
    latitude: 37.27161307035864,
    longitude: 127.5090826980363,
    name: '더반올가닉',
  };

  const onNaviPress = () =>
    Linking.openURL(
      `nmap://route/car?dlat=${addrInfo.latitude}&dlng=${addrInfo.longitude}&dname=${addrInfo.name}`,
    );

  return (
    <View style={styles.rootContainer}>
      {/* 태그 나열  */}
      <Text style={styles.title}>공간 유형</Text>
      <View style={styles.tagContainer}>
        <InfoTags tagList={tagList} />
      </View>

      {/* 지도 연동 */}
      <MapInfo addr={addrInfo.addr} onNaviPress={onNaviPress} />
      <MapView latitude={addrInfo.latitude} longitude={addrInfo.longitude} />
    </View>
  );
}

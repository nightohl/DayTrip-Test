import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import {MapProps} from '@navigators/Tab/types';
import {Image} from 'react-native-animatable';
import {styles} from './styles';
import {Tag, AddrInfo} from './types';

import Ionicons from 'react-native-vector-icons/Ionicons';

export function Map({}: MapProps) {
  const TagList: Tag = ['카페', '야외 / 공원', '테라스'];
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

  const Tags = TagList.map((tag, i) => (
    <View style={styles.tag} key={`tag${i}`}>
      <Text>{tag}</Text>
    </View>
  ));

  return (
    <View style={styles.rootContainer}>
      {/* 태그 나열  */}
      <Text style={styles.title}>공간 유형</Text>
      <View style={styles.tagContainer}>{Tags}</View>

      {/* 지도 연동 */}
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.title}>주소</Text>
          <View style={styles.addr}>
            <Text>{addrInfo.addr}</Text>
            {/* <Text style={styles.copyAddr}>주소 복사</Text> */}
          </View>
        </View>
        <TouchableOpacity
          style={styles.naviIcon}
          onPress={onNaviPress}
          activeOpacity={0.7}>
          <Ionicons name="navigate-circle" size={35} />
        </TouchableOpacity>
      </View>
      <Image source={require('@assets/map.jpeg')} style={styles.map} />
    </View>
  );
}

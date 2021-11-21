import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';

export function MapInfo({
  addr,
  onNaviPress,
}: {
  addr: string;
  onNaviPress: () => void;
}) {
  return (
    <View style={styles.rootContainer}>
      <View>
        <Text style={styles.title}>주소</Text>
        <View style={styles.addr}>
          <Text>{addr}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.naviIcon}
        onPress={onNaviPress}
        activeOpacity={0.7}>
        <Ionicons name="navigate-circle" size={35} />
      </TouchableOpacity>
    </View>
  );
}

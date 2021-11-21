import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';

// route.params로 전달될 속성값들을 명시한다.
export type RootPlaceInfoTab = {
  DayLog: undefined;
  Map: undefined;
  Near: undefined;
  Curation: undefined;
};

// 스크린 컴포넌트가 전달받을 navigation, route 프롭을 정의한다.
export type DayLogProps = {
  navigation: MaterialTopTabNavigationProp<RootPlaceInfoTab, 'DayLog'>;
};
export type MapProps = {
  navigation: MaterialTopTabNavigationProp<RootPlaceInfoTab, 'Map'>;
};
export type NearProps = {
  navigation: MaterialTopTabNavigationProp<RootPlaceInfoTab, 'Near'>;
};
export type CurationProps = {
  navigation: MaterialTopTabNavigationProp<RootPlaceInfoTab, 'Curation'>;
};

import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/Stacks';
import {useStore} from '@root/useStore';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

interface TipsProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'Debug'>;
}

const Tips: React.FC<TipsProps> = props => {
  const {route, navigation} = props;
  const [logs, bears, increasePopulation, mergeLogs] = useStore(state => [
    state.logs,
    state.bears,
    state.increasePopulation,
    state.mergeLogs,
  ]);

  const menus = [
    '线上认识',
    '线下活动',
    '感情培养',
    '感情危机',
    '异地恋情',
    '婚前同居',
    '婚前体检',
    '彩礼三金',
    '分手复合',
    '聊天技巧',
    '关于前任',
    '修成正果',
  ];
  return (
    <View style={styles.views}>
      {Array.from(menus.slice(0, 9), (_, i) => (
        <TouchableOpacity key={i} style={styles.viewItem} activeOpacity={0.88}>
          <FastImage
            style={{height: 52, width: 52, borderRadius: 26}}
            source={{uri: 'https://cctv3.net/i.jpg'}}
          />
          <Text style={{fontSize: 12}} numberOfLines={1}>
            {_}
          </Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        activeOpacity={0.88}
        style={styles.viewItem}></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewItem: {
    alignItems: 'center',
    width: (Dimensions.get('screen').width - 20) / 6,
    marginVertical: 4,
  },
  views: {
    borderRadius: 8,
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Tips;

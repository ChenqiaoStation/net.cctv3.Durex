import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/Stacks';
import {useStore} from '@root/useStore';
import {useOSS} from '@src/utils';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

interface MenusProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'Debug'>;
}

const Menus: React.FC<MenusProps> = props => {
  const {route, navigation} = props;
  const [logs, bears, increasePopulation, mergeLogs] = useStore(state => [
    state.logs,
    state.bears,
    state.increasePopulation,
    state.mergeLogs,
  ]);

  const menus = [
    '线上择偶',
    '线下活动',
    '情感问题',
    '异地恋情',
    '婚前同居',
    '婚前体检',
    '彩礼三金',
    '车房存款',
    '婚礼筹办',
    '分手复合',
    '聊天技巧',
    '关于前任',
    '修成正果',
  ];
  return (
    <View style={styles.views}>
      {Array.from(menus.slice(0, Math.min(menus.length, 9)), (_, i) => (
        <TouchableOpacity key={i} style={styles.viewItem} activeOpacity={0.88}>
          <FastImage
            style={{height: 40, width: 40}}
            source={{uri: 'https://cctv3.net/i.jpg'}}
          />
          <View style={{height: 4}} />
          <Text style={{fontSize: 12, color: '#333'}} numberOfLines={1}>
            {_}
          </Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity activeOpacity={0.88} style={styles.viewItem}>
        <FastImage
          style={{height: 40, width: 40}}
          source={{
            uri: useOSS('assets/menuMore.png'),
          }}
        />
        <View style={{height: 4}} />
        <Text style={{fontSize: 12, color: '#333'}} numberOfLines={1}>
          {`更多分类`}
        </Text>
      </TouchableOpacity>
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

export default Menus;

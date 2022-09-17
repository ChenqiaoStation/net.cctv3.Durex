import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/Stacks';
import {useStore} from '@root/useStore';
import ToolBar from '@src/components/ToolBar';
import {useHttp} from '@src/hooks';
import {useUUID} from '@src/utils';
import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
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

  const [r, setR] = useState(0);

  const {loading, result} = useHttp({
    action: 'soul/selectSouls',
    body: {},
    method: 'GET',
    r: r,
  });

  const menus = [
    [
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
    ],
  ];

  const Items = () => {
    return <View></View>;
  };

  const Item = () => {
    return (
      <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <FastImage
          style={{height: 64, width: 64, borderRadius: 32}}
          source={{uri: 'https://cctv3.net/i.jpg'}}
        />
      </View>
    );
  };
  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}>
          
        </ScrollView>
    </View>
  );
};

export default Menus;

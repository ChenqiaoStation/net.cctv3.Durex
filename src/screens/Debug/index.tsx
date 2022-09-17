import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/Stacks';
import {useStore} from '@root/useStore';
import ToolBar from '@src/components/ToolBar';
import {useHttp} from '@src/hooks';
import {useUUID} from '@src/utils';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

interface DebugProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'Debug'>;
}

const Debug: React.FC<DebugProps> = props => {
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

  return (
    <View style={{flex: 1}}>
      <ToolBar
        onBackPress={() => {
          navigation.goBack();
        }}
        title="测试页面"
      />
      
    </View>
  );
};

export default Debug;

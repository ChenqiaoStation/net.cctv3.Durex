import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/Stacks';
import {useStore} from '@root/useStore';
import {useOSS, useStatusBarHeight} from '@src/utils';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface SearchBarProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'Debug'>;
}

const SearchBar: React.FC<SearchBarProps> = props => {
  const {route, navigation} = props;
  const [logs, bears, increasePopulation, mergeLogs, theme] = useStore(
    state => [
      state.logs,
      state.bears,
      state.increasePopulation,
      state.mergeLogs,
      state.setting.theme,
    ],
  );

  return (
    <View style={{}}>
      <View
        style={{height: useStatusBarHeight(true), backgroundColor: theme}}
      />
      <View style={[styles.views, {backgroundColor: theme}]}>
        <TouchableOpacity onPress={() => {}} activeOpacity={0.88}>
          <Text style={{fontSize: 14, color: 'white'}}>上海</Text>
        </TouchableOpacity>
        <View style={styles.viewSearcher}>
          <View style={{flex: 1}} />
          <View style={[styles.viewLine, {backgroundColor: theme}]} />
          <Text style={{color: '#333', fontSize: 12}}>搜索</Text>
        </View>
        <TouchableOpacity onPress={() => {}} activeOpacity={0.88}>
          <Image
            source={{uri: useOSS('assets/searchBarMessage.png')}}
            style={{width: 24, height: 24, tintColor: 'white'}}
          />
        </TouchableOpacity>
      </View>
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
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 12,
  },
  viewSearcher: {
    flex: 1,
    height: 28,
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 8,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  viewLine: {
    height: '61.8%',
    width: 0.2,
    marginHorizontal: 10,
  },
});

export default SearchBar;

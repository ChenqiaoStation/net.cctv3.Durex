import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/Stacks';
import {useStore} from '@root/useStore';
import {useHttp} from '@src/hooks';
import React, {useState} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {x} from 'react-native-x-utils';

import {Menus, SearchBar, Banners} from './components';

interface HomeProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'Debug'>;
}

const Home: React.FC<HomeProps> = props => {
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
      <SearchBar />
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Array.from({length: 100}, (_, i) => x.ui.useRandomColor())}
          removeClippedSubviews={true}
          refreshControl={
            <RefreshControl onRefresh={() => {}} refreshing={false} />
          }
          ListHeaderComponent={
            <View style={{paddingVertical: 10}}>
              <Banners />
              <View style={{height: 10}} />
              <Menus />
            </View>
          }
          keyExtractor={(item, index) => `${index}`}
          renderItem={info => (
            <View
              style={{
                height: 100,
                backgroundColor: info.item,
              }}></View>
          )}
        />
      </View>
    </View>
  );
};

export default Home;

import {RouteProp} from '@react-navigation/native';
import {RootStacksParams, RootStacksProp} from '@root/Stacks';
import {useStore} from '@root/useStore';
import {useOSS, USE_SCREEN_WIDTH} from '@src/utils';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Swiper from 'react-native-swiper';

interface BannersProps {
  navigation?: RootStacksProp;
  route?: RouteProp<RootStacksParams, 'Debug'>;
}

const Banners: React.FC<BannersProps> = props => {
  const {route, navigation} = props;
  const [logs, bears, increasePopulation, mergeLogs] = useStore(state => [
    state.logs,
    state.bears,
    state.increasePopulation,
    state.mergeLogs,
  ]);

  return (
    <View style={{height: USE_SCREEN_WIDTH / 3, borderRadius: 8}}>
      <Swiper
        autoplay={true}
        loop={true}
        autoplayTimeout={2}
        removeClippedSubviews={false}
        dotStyle={{bottom: -16}}
        activeDotStyle={{bottom: -16}}>
        {Array.from(
          ['business/debugTrip001.jpg', 'business/debugTrip002.jpg'],
          (_, i) => (
            <FastImage
              key={i}
              source={{uri: useOSS(_)}}
              style={{
                width: USE_SCREEN_WIDTH - 20,
                height: USE_SCREEN_WIDTH / 3,
                borderRadius: 8,
              }}
              resizeMode="stretch"
            />
          ),
        )}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Banners;

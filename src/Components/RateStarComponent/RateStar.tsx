import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import styles from './RateStarStyle';
interface Rate {
  star: number;
}
export function RateStar(item: Rate) {
  const fivestars = () => {
    return (
      <View>
        <Image source={require('./Star/5stars.png')} resizeMode="contain" />
      </View>
    );
  };
  const fourstars = () => {
    return (
      <View>
        <Image source={require('./Star/4stars.png')} resizeMode="contain" />
      </View>
    );
  };
  const threestars = () => {
    return (
      <View>
        <Image source={require('./Star/3stars.png')} resizeMode="contain" />
      </View>
    );
  };
  const twostars = () => {
    return (
      <View>
        <Image source={require('./Star/2stars.png')} resizeMode="contain" />
      </View>
    );
  };
  const onestar = () => {
    return (
      <View>
        <Image source={require('./Star/1star.png')} resizeMode="contain" />
      </View>
    );
  };
  const nostar = () => {
    return (
      <View>
        <Image source={require('./Star/nostar.png')} resizeMode="contain" />
      </View>
    );
  };
  const eventStar = (star: number) => {
    switch (star) {
      case 0:
        return nostar();
      case 1:
        return onestar();
      case 2:
        return twostars();

      case 3:
        return threestars();

      case 4:
        return fourstars();

      case 5:
        return fivestars();
    }
    return nostar();
  };
  return (
    <View>
      <Text>{eventStar(item.star)}</Text>
    </View>
  );
}

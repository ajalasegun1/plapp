import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import {ms, s} from 'react-native-size-matters';
import getTenth from '../utils/getTenth';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

type Props = {
  rating?: number;
  gap?: number;
  size?: number;
};
const Rating: FC<Props> = ({rating, gap, size}) => {
  const styles = makeStyles(gap!!);
  console.log({check: getTenth(rating!)});
  function determine() {
    if (getTenth(rating!) >= 4.5) {
      return (
        <View style={styles.container}>
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
        </View>
      );
    }

    if (getTenth(rating!) == 4.5) {
      return (
        <View style={styles.container}>
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-half-o" color={'gold'} size={ms(size!!)} />
        </View>
      );
    }

    if (getTenth(rating!) >= 3.5) {
      return (
        <View style={styles.container}>
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
        </View>
      );
    }

    if (getTenth(rating!) == 3.5) {
      return (
        <View style={styles.container}>
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-half-o" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
        </View>
      );
    }

    if (getTenth(rating!) >= 2.5) {
      return (
        <View style={styles.container}>
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
        </View>
      );
    }

    if (getTenth(rating!) == 2.5) {
      return (
        <View style={styles.container}>
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-half-o" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
        </View>
      );
    }

    if (getTenth(rating!) >= 1.5) {
      return (
        <View style={styles.container}>
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
        </View>
      );
    }

    if (getTenth(rating!) == 1.5) {
      return (
        <View style={styles.container}>
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-half-o" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
        </View>
      );
    }

    if (getTenth(rating!) <= 1.0) {
      return (
        <View style={styles.container}>
          <FontAwesome name="star" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
        </View>
      );
    }
    if (getTenth(rating!) == 0.5) {
      return (
        <View style={styles.container}>
          <FontAwesome name="star-half-o" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
        </View>
      );
    }
    if (getTenth(rating!) < 0.5) {
      return (
        <View style={styles.container}>
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
          <FontAwesome name="star-o" color={'gold'} size={ms(size!!)} />
        </View>
      );
    }
  }

  return <>{determine()}</>;
};

export default Rating;

const makeStyles = (gap: number) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: s(gap),
    },
  });

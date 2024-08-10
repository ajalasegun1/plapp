import {StatusBar, StyleSheet} from 'react-native';
import React from 'react';

type StatusBarStyle = 'default' | 'light-content' | 'dark-content';
type Style = {
  content: StatusBarStyle;
};
export default function MyStatusBar({content}: Style) {
  return (
    <StatusBar backgroundColor={'#00000000'} translucent barStyle={content} />
  );
}

import React from 'react';
import {View} from 'react-native';
import {vs, s} from 'react-native-size-matters';

type Props = {
  gap: number;
  horizontal?: boolean;
};
export default function Spacer({gap, horizontal}: Props): React.JSX.Element {
  return (
    <View
      style={{
        height: !horizontal ? vs(gap) : undefined,
        width: horizontal ? s(gap) : undefined,
      }}
    />
  );
}

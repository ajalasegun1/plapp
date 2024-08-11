import React, {FC} from 'react';
import {ms} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  focused: boolean;
};
const HomeIcons: FC<Props> = ({focused}) => {
  return (
    <MaterialCommunityIcons
      name={focused ? 'shopping' : 'shopping-outline'}
      size={ms(22)}
      color={focused ? '#9E77ED' : '#A6A6A6'}
    />
  );
};

export default HomeIcons;

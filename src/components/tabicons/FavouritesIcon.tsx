import React, {FC} from 'react';
import {ms} from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
  focused: boolean;
};
const FavoritesIcons: FC<Props> = ({focused}) => {
  return (
    <MaterialIcons
      name={focused ? 'favorite' : 'favorite-outline'}
      color={focused ? '#9E77ED' : '#A6A6A6'}
      size={ms(22)}
    />
  );
};

export default FavoritesIcons;

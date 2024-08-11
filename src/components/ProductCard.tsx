import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import useProductStore, {Product} from '../store/products/useProductsStore';
import {ms, s, vs} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import Spacer from './Spacer';
import Rating from './Rating';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/types';

type Props = {
  product: Product;
};
const ProductCard: FC<Props> = ({product}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {selectProduct} = useProductStore();
  function goToDetailsScreen(product: Product) {
    selectProduct(product);
    navigation.navigate('Details');
  }
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={() => goToDetailsScreen(product)}>
      <View style={styles.imgcontainer}>
        <FastImage
          style={{...StyleSheet.absoluteFillObject}}
          source={{uri: product.thumbnail}}
          resizeMode="contain"
        />
      </View>
      <Spacer gap={8} />
      <View>
        <View style={styles.ratingRow}>
          <Rating size={12} rating={product.rating} gap={2} />
          <Text style={styles.rating}>({product.rating})</Text>
        </View>
        <Text style={styles.brand} numberOfLines={1}>
          {product.brand}
        </Text>
        <Text style={styles.title} numberOfLines={1}>
          {product.title}
        </Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgcontainer: {
    height: vs(150),
    width: '100%',
    backgroundColor: '#f4f4f4',
    borderRadius: s(8),
  },
  brand: {
    fontSize: ms(12),
    color: '#A6A6A6',
    fontWeight: '500',
  },
  title: {
    fontSize: ms(12),
    color: '#1e1e1e',
    fontWeight: '500',
  },
  price: {
    fontSize: ms(11),
    fontWeight: '500',
    color: '#1e1e1e',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(7),
  },
  rating: {
    fontSize: ms(10),
    color: '#A6A6A6',
  },
});

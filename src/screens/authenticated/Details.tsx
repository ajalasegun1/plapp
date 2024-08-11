import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import MyStatusBar from '../../components/MyStatusBar';
import useProductStore from '../../store/products/useProductsStore';
import {ms, s, vs} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {DetailsScreenProps} from '../../navigation/types';
import Rating from '../../components/Rating';
import Spacer from '../../components/Spacer';
import ReviewCard from '../../components/ReviewCard';

const Details: FC<DetailsScreenProps> = ({navigation}) => {
  const {selectedProduct, favorites, toggleFavorite} = useProductStore();

  function goBack() {
    navigation.goBack();
  }
  const isFavorite = favorites.find(item => item.id === selectedProduct?.id);
  return (
    <View style={styles.container}>
      <MyStatusBar content="dark-content" />
      <ScrollView style={styles.scroll}>
        <View style={styles.imageContainer}>
          <View style={styles.nav}>
            <Pressable style={styles.back} onPress={goBack}>
              <Ionicons size={ms(22)} color={'#1e1e1e'} name="chevron-back" />
            </Pressable>
            <Pressable
              style={styles.back}
              onPress={() => toggleFavorite(selectedProduct!)}>
              <MaterialIcons
                name={isFavorite ? 'favorite' : 'favorite-outline'}
                color={isFavorite ? 'red' : '#1e1e1e'}
                size={ms(22)}
              />
            </Pressable>
          </View>
          <FastImage
            source={{uri: selectedProduct?.thumbnail}}
            style={{...StyleSheet.absoluteFillObject}}
            resizeMode="contain"
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.title}>{selectedProduct?.title}</Text>
          <Text style={styles.brand}>{selectedProduct?.brand}</Text>

          <View style={styles.detailsRow}>
            <Text style={styles.price}>${selectedProduct?.price}</Text>
            <View style={styles.ratingRow}>
              <Rating gap={3} size={20} rating={selectedProduct?.rating} />
              <Text style={styles.brand}>{selectedProduct?.rating}</Text>
            </View>
          </View>
          <Spacer gap={20} />
          <Text style={styles.brand}>Description:</Text>
          <Text style={styles.text}>{selectedProduct?.description}</Text>
          <Spacer gap={20} />
          <View style={styles.reviews}>
            {selectedProduct?.reviews.map((review, index) => (
              <ReviewCard review={review} key={index.toString()} />
            ))}
          </View>
        </View>
      </ScrollView>
      {/* <View style={styles.footer}></View> */}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    flex: 1,
  },
  imageContainer: {
    height: vs(250),
    backgroundColor: '#f4f4f4',
  },
  nav: {
    position: 'absolute',
    top: vs(30),
    zIndex: 2,
    height: vs(40),
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: s(10),
    justifyContent: 'space-between',
  },
  back: {
    width: ms(40),
    height: ms(40),
    borderRadius: ms(8),
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    height: vs(50),
    backgroundColor: 'red',
    borderRadius: s(8),

    position: 'absolute',
    bottom: vs(0),
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    zIndex: 2,
    right: 0,
    left: 0,
  },
  details: {
    paddingHorizontal: s(10),
    paddingVertical: vs(10),
  },
  title: {
    fontSize: ms(16),
    fontWeight: '600',
    color: '#1e1e1e',
  },
  brand: {
    fontWeight: '500',
    fontSize: ms(14),
    color: '#A6A6A6',
  },
  price: {
    fontWeight: '500',
    fontSize: ms(14),
    color: '#1E1E1E',
  },
  detailsRow: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  ratingRow: {
    flexDirection: 'row',
    alignContent: 'center',
    gap: s(5),
  },
  text: {
    fontSize: ms(12),
    color: '#A6A6A6',
  },
  reviews: {
    gap: vs(10),
  },
});

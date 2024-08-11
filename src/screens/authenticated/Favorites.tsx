import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import MyStatusBar from '../../components/MyStatusBar';
import Spacer from '../../components/Spacer';
import {ms, s, vs} from 'react-native-size-matters';
import HomeHeader from '../../components/HomeHeader';
import useProductStore, {Product} from '../../store/products/useProductsStore';
import ProductCard from '../../components/ProductCard';

const Favorites = () => {
  const {favorites} = useProductStore();

  const renderItem: ListRenderItem<Product> = ({item}) => (
    <ProductCard product={item} />
  );

  return (
    <View style={styles.container}>
      <MyStatusBar content="dark-content" />
      <Spacer gap={30} />
      <View style={styles.headercontainer}>
        <View>
          <Text style={styles.title}>My Favorites</Text>
        </View>
      </View>
      <FlatList
        numColumns={2}
        data={favorites}
        renderItem={renderItem}
        columnWrapperStyle={styles.wrapper}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(_, i) => i.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: s(10),
  },
  wrapper: {
    gap: s(10),
  },
  contentContainer: {
    gap: vs(10),
    paddingVertical: vs(10),
  },
  loader: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  headercontainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#f4f4f4',
    paddingBottom: vs(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '600',
    fontSize: ms(16),
    color: '#1e1e1e',
  },
  name: {
    fontSize: ms(15),
    fontWeight: '500',
    color: '#A6A6A6',
  },
  logout: {
    backgroundColor: '#f4f4f4',
    alignSelf: 'flex-start',
    paddingHorizontal: ms(8),
    paddingVertical: ms(4),
    borderRadius: ms(4),
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(5),
  },
  logoutText: {
    color: '#1e1e1e',
    fontWeight: '500',
  },
});

import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import MyStatusBar from '../../components/MyStatusBar';
import Spacer from '../../components/Spacer';
import {s, vs} from 'react-native-size-matters';
import HomeHeader from '../../components/HomeHeader';
import useProductStore, {Product} from '../../store/products/useProductsStore';
import ProductCard from '../../components/ProductCard';

const Home = () => {
  const {getProducts, products, loading, total} = useProductStore();
  useEffect(() => {
    getProducts();
  }, []);

  const renderItem: ListRenderItem<Product> = ({item}) => (
    <ProductCard product={item} />
  );
  function renderHeader() {
    return (
      <View style={styles.loader}>
        {loading ? <ActivityIndicator color={'gray'} size={'large'} /> : null}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MyStatusBar content="dark-content" />
      <Spacer gap={30} />
      <HomeHeader />
      <FlatList
        numColumns={2}
        data={products}
        renderItem={renderItem}
        columnWrapperStyle={styles.wrapper}
        contentContainerStyle={styles.contentContainer}
        keyExtractor={(_, i) => i.toString()}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          if (total === products.length) return;
          if (loading) return;
          getProducts();
        }}
        ListFooterComponent={renderHeader}
      />
    </View>
  );
};

export default Home;

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
});

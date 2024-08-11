import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import Toast from 'react-native-simple-toast';
import useAuthStore from '../auth/useAuthStore';

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
};

export type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

type ProductStore = {
  products: Product[];
  loading: boolean;
  limit: number;
  skip: number;
  total?: number;
  getProducts: () => void;
  selectedProduct?: Product;
  selectProduct: (product: Product) => void;
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
};

const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      products: [],
      loading: false,
      limit: 10,
      skip: 0,
      selectedProduct: undefined,
      favorites: [],

      getProducts: () => {
        set({loading: true});
        fetch(
          `https://dummyjson.com/products/?limit=${get().limit}&skip=${
            get().skip
          }`,
        )
          .then(res => res.json())
          .then(res =>
            set({
              products: [...get().products, ...res.products],
              total: res.total,
              skip: get().skip + res.products.length,
              loading: false,
            }),
          )
          .catch(error => {
            console.log({error});
            Toast.show('Error fetching products', Toast.LONG);
            set({loading: false});
          });

        set({skip: get().skip + get().products.length});
      },

      selectProduct: (product: Product) => {
        set({selectedProduct: product});
      },

      toggleFavorite: (product: Product) => {
        const find = get().favorites?.find(item => item.id === product.id);
        if (find) {
          set({
            favorites: get().favorites?.filter(item => item.id !== product.id),
          });
        } else {
          set({favorites: [...get()?.favorites, product]});
        }
      },
    }),
    {
      name: 'product-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: state => ({
        // products: state.products,
      }),
    },
  ),
);

export default useProductStore;

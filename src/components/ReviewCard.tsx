import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Review} from '../store/products/useProductsStore';
import dayjs from 'dayjs';
import Rating from './Rating';
import {ms, vs} from 'react-native-size-matters';
import Spacer from './Spacer';
type Props = {
  review: Review;
};
const ReviewCard: FC<Props> = ({review}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View>
          <Text style={styles.name}>{review.reviewerName}</Text>
          <Spacer gap={3} />
          <Rating rating={review.rating} gap={3} size={12} />
        </View>

        <Text style={styles.date}>
          {dayjs(review.date).format('DD/MM/YYYY')}
        </Text>
      </View>
      <Spacer gap={5} />
      <Text style={styles.review}>{review.comment}</Text>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
    paddingBottom: vs(10),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: ms(10),
  },
  name: {
    color: '#1e1e1e',
    fontSize: ms(15),
  },
  review: {
    color: '#A6A6A6',
    fontSize: ms(13),
  },
});

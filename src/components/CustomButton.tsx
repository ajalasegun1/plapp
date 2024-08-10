import {
  Pressable,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';

type Props = {
  onPress?: () => void;
  text: string;
  color?: string;
  loading?: boolean;
};
export default function CustomButton({
  onPress,
  text,
  color = '#9E77ED',
  loading,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, {backgroundColor: color}]}>
      {loading ? (
        <ActivityIndicator size={vs(24)} color={'#fff'} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: vs(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ms(24),
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: ms(16),
  },
});

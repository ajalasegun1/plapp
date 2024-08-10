import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {FC, useState} from 'react';
import MyStatusBar from '../../components/MyStatusBar';
import {SafeAreaView} from 'react-native-safe-area-context';
import {vs, s, ms} from 'react-native-size-matters';
import Spacer from '../../components/Spacer';
import CustomInput from '../../components/CustomInput';
import Profile from '../../assets/images/icons/profile.svg';
import Mail from '../../assets/images/icons/mail.svg';
import Lock from '../../assets/images/icons/lock.svg';
import EyeIcon from '../../assets/images/icons/eye.svg';
import CustomButton from '../../components/CustomButton';
import {LoginScreenProps} from '../../navigation/types';

const Login: FC<LoginScreenProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <MyStatusBar content="dark-content" />
      <ScrollView style={styles.scroll}>
        <Spacer gap={10} />
        <Text style={styles.title}>Sign in</Text>
        <Text style={styles.subTitle}>Welcome back! Sign in to continue</Text>
        <View style={styles.cover}>
          <CustomInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            leftIcon={<Mail />}
          />
          <CustomInput
            placeholder="Password"
            value={password}
            rightIcon={<EyeIcon />}
            onChangeText={setPassword}
            leftIcon={<Lock />}
            password
          />
        </View>
        <Spacer gap={20} />
        <CustomButton text="Sign in" onPress={() => {}} />
        <Spacer gap={10} />

        <Text style={styles.smallText}>
          Dont have an account?
          <Text
            style={styles.smallTextColored}
            onPress={() => {
              navigation.navigate('Signup');
            }}>
            {' '}
            Sign up
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: vs(15),
    paddingHorizontal: s(10),
  },
  scroll: {
    flex: 1,
  },
  title: {
    fontSize: ms(32),
    fontWeight: '500',
    color: '#1e1e1e',
  },
  subTitle: {
    color: '#A6A6A6',
    fontSize: ms(16),
    lineHeight: ms(24),
  },
  cover: {
    marginVertical: vs(20),
    gap: vs(10),
  },

  smallText: {
    color: '#A6A6A6',
    fontSize: ms(14),
    lineHeight: ms(24),
    textAlign: 'center',
  },
  smallTextColored: {
    color: '#9E77ED',
    fontSize: ms(14),
    lineHeight: ms(24),
    textAlign: 'center',
  },
});

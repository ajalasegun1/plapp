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
import {SignupScreenProps} from '../../navigation/types';
import {validateSignupForm} from '../../utils/validateForms';
import useAuthStore from '../../store/auth/useAuthStore';
import Toast from 'react-native-simple-toast';

const Signup: FC<SignupScreenProps> = ({navigation}) => {
  const {users, saveUser} = useAuthStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCpassword] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSignup() {
    setLoading(true);
    const isValid = validateSignupForm({name, email, password, cPassword});
    const found = users.find(user => user.email === email);
    if (found) {
      Toast.show('User with email address already exists!', Toast.LONG);
      setLoading(false);
      return;
    }
    if (isValid) {
      saveUser({
        user: {name, email: email.toLowerCase(), password},
        token:
          'laksnclkansclkalskcnboajbsckjbascjbisqdbvcihqdscibqdaichqiwdhvcsihqwvficqbcjbwqiejbcihwevciywvcdk;jbasicjbiwdjajbscoasocbaosbcoasciaoiscboiabcioansciobascoibas',
      });
    }
    setLoading(false);
  }
  return (
    <SafeAreaView style={styles.container}>
      <MyStatusBar content="dark-content" />
      <ScrollView style={styles.scroll}>
        <Spacer gap={10} />
        <Text style={styles.title}>Sign up</Text>
        <Text style={styles.subTitle}>Signup to get started!</Text>
        <View style={styles.cover}>
          <CustomInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            leftIcon={<Profile />}
          />
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
          <CustomInput
            placeholder="Confirm Password"
            value={cPassword}
            rightIcon={<EyeIcon />}
            onChangeText={setCpassword}
            password
            leftIcon={<Lock />}
          />
        </View>
        <Spacer gap={20} />
        <CustomButton text="Sign up" onPress={handleSignup} loading={loading} />
        <Spacer gap={10} />
        <Text style={styles.smallText}>
          By signin up on this platform, you agree to our{'\n'}{' '}
          <Text style={styles.smallTextColored}>Term of Use</Text> and
          <Text style={styles.smallTextColored}> Privacy Policy</Text>
        </Text>
        <Spacer gap={30} />
        <Text style={styles.smallText}>
          Have an account?
          <Text
            style={styles.smallTextColored}
            onPress={() => navigation.navigate('Login')}>
            {' '}
            Sign in
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

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

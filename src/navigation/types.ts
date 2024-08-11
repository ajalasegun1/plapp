import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  LandingTab: undefined;
  Details: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;
export type SignupScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Signup'
>;

export type LandingTabScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'LandingTab'
>;
export type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;

import Toast from 'react-native-simple-toast';

function validateEmail(email: string) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

type SignupForm = {
  name: string;
  email: string;
  password: string;
  cPassword: string;
};
export function validateSignupForm({
  name,
  email,
  password,
  cPassword,
}: SignupForm) {
  if (!email || !name || !password || !cPassword) {
    Toast.show('Enter all fields of the form!', Toast.LONG);
    return false;
  }

  if (!validateEmail(email)) {
    Toast.show('Enter a valid email address!', Toast.LONG);
    return false;
  }

  if (cPassword !== password) {
    Toast.show('Passwords must match!', Toast.LONG);
    return false;
  }

  return true;
}

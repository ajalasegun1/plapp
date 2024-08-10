import {useState} from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import {vs, s, ms} from 'react-native-size-matters';

type Props = {
  rightIcon?: React.JSX.Element;
  leftIcon?: React.JSX.Element;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value: string;
  password?: boolean;
};
export default function CustomInput({
  rightIcon,
  leftIcon,
  placeholder,
  onChangeText,
  value,
  password,
}: Props): React.JSX.Element {
  const [focused, setFocused] = useState(false);
  const [secure, setSecure] = useState(password);
  return (
    <View style={[styles.container, focused ? styles.focused : null]}>
      {leftIcon && leftIcon}
      <TextInput
        style={[styles.input]}
        placeholder={placeholder}
        placeholderTextColor={'#A6A6A6'}
        onChangeText={onChangeText}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        cursorColor={'#1e1e1e'}
        secureTextEntry={password ? secure : undefined}
      />
      {rightIcon && (
        <Pressable onPress={() => (password ? setSecure(!secure) : null)}>
          {rightIcon}
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: vs(49),
    borderWidth: vs(1),
    borderRadius: s(12),
    borderColor: '#A6A6A6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: s(20),
    gap: s(8),
  },
  input: {
    height: vs(49),
    flex: 1,
    fontSize: ms(14),
    color: '#1e1e1e',
  },
  focused: {
    borderColor: '#9E77ED',
  },
});

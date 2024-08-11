import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import useAuthStore from '../store/auth/useAuthStore';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeHeader = () => {
  const {user, logout} = useAuthStore();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome back,</Text>
        <Text style={styles.name}>{user?.name}</Text>
      </View>
      <Pressable style={styles.logout} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
        <Ionicons name="exit-outline" size={ms(20)} color={'#1e1e1e'} />
      </Pressable>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
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

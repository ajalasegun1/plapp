import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/authenticated/Home';
import Favorites from '../screens/authenticated/Favorites';
import HomeIcons from '../components/tabicons/HomeIcons';
import FavoritesIcons from '../components/tabicons/FavouritesIcon';
import {StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';

const Tab = createBottomTabNavigator();

export default function LandingTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: styles.tabBarLabelStyles,
        tabBarActiveTintColor: '#9E77ED',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return <HomeIcons focused={focused} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({focused}) => {
            return <FavoritesIcons focused={focused} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarLabelStyles: {
    fontWeight: '500',
    fontSize: ms(12),
  },
});

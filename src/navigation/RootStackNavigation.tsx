import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from '../screens/auth/Signup';
import Login from '../screens/auth/Login';
import {RootStackParamList} from './types';
import LandingTab from './LandingTab';
import useAuthStore from '../store/auth/useAuthStore';
import Details from '../screens/authenticated/Details';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  const {token} = useAuthStore();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {token ? (
          <Stack.Group>
            <Stack.Screen name="LandingTab" component={LandingTab} />
            <Stack.Screen name="Details" component={Details} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;

/**
 * Delivery Person App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//NATIVE COMPONENTS
import * as React from 'react';

//SCREENS
import SplashScreen from '../screens/splash';
import HomeScreen from '../screens/home';

//CONTAINERS
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from './drawer';
import MovieDetail from '../screens/MovieDetail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Splash'}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Root"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="MovieDetail"
          component={MovieDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/home';
import Favorites from '../screens/favorites';
import Icon from 'react-native-vector-icons/Entypo';
import colors from '../utils/colors';
import TextView from '../components/text';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: colors.black,
        activeBackgroundColor: colors.background,
        inactiveBackgroundColor: colors.white,
      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: ({focused, size}) => (
            <TextView
              title={'Hello'}
              type={'medium'}
              color={focused ? colors.primary : colors.grey7}
            />
          ),
          drawerIcon: ({focused, size}) => (
            <Icon
              name={'home'}
              size={20}
              style={[
                focused ? styles.drawerActive : styles.drawerInActive,
                {height: size, width: size},
              ]}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: 'Favorites',
          headerTitleStyle: {color: 'tomato'},
          drawerLabel: ({focused, size}) => (
            <TextView
              title={'Favorites'}
              type={'medium'}
              color={focused ? colors.primary : colors.grey7}
            />
          ),
          drawerIcon: ({focused, size}) => (
            <Icon
              name={'star'}
              size={20}
              style={[
                focused ? styles.drawerActive : styles.drawerInActive,
                {height: size, width: size},
              ]}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
const styles = StyleSheet.create({
  drawerActive: {
    color: colors.primary,
  },
  drawerInActive: {color: colors.grey7},
});

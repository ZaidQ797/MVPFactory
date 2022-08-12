//import liraries
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {appLogo} from '../assets';
import colors from '../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
// create a component
import {useNavigation, CommonActions} from '@react-navigation/native';
const Splash = () => {
  const navigation = useNavigation();
  React.useEffect(() => {
    setTimeout(async () => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'Root'}],
        }),
      );
    }, 2000);
  }, []);
  return (
    <View style={[styles.container, {backgroundColor: colors.white}]}>
      <Image source={appLogo.splashLogo} style={styles.logo} />
    </View>
  );
};
//make this component available to the app
export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    heigt: 200,
    width: 200,
    resizeMode: 'contain',
  },
});

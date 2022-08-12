import React from 'react';
import {View} from 'react-native';
import {Header as AppHeader} from 'react-native-elements';
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextView from './text';
import {wp} from '../utils/responsive';
import {useNavigation} from '@react-navigation/native';
const Header = ({
  title,
  leftIcon = 'menu',
  rightIcon,
  onTogglePress,
  onSearchPress,
  showRight = false,
  onLeftPress,
}) => (
  <AppHeader
    backgroundColor={colors.primary}
    centerComponent={
      <TextView title={title} type={'medium'} color={colors.white} />
    }
    leftComponent={
      <Ionicons
        name={leftIcon}
        size={wp(7)}
        color={colors.white}
        onPress={onLeftPress}
      />
    }
    rightComponent={
      <RightComponent
        icon={rightIcon}
        onTogglePress={onTogglePress}
        onSearchPress={onSearchPress}
      />
    }
  />
);
const RightComponent = ({icon, onTogglePress, onSearchPress}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Icon
        name={icon}
        size={wp(7)}
        color={colors.white}
        onPress={onTogglePress}
        activeOpacity={1}
        style={{marginLeft: 5}}
      />
    </View>
  );
};
export default Header;

import React from 'react';
import {Text, StyleSheet} from 'react-native';
import fonts from '../utils/fonts';
import propTypes from 'prop-types';
const TextView = ({
  title,
  color,
  type,
  textAlign,
  style,
  numberOfLines,
  children,
  onPress,
  size,
}) => {
  const {normalStyle, semiBoldStyle, boldStyle} = styles;
  const textStyle =
    type === 'normal'
      ? normalStyle
      : type === 'medium'
      ? semiBoldStyle
      : boldStyle;
  return (
    <Text
      onPress={onPress}
      numberOfLines={numberOfLines}
      style={[textStyle, style, {color, textAlign}]}>
      {title}
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  normalStyle: {
    fontFamily: fonts.PoppinsRegular,
    fontSize: 14,
    //  margin,
  },
  semiBoldStyle: {
    fontFamily: fonts.PoppinsMedium,
    fontSize: 16,
    // margin,
  },
  boldStyle: {
    fontFamily: fonts.PoppinsBold,
    fontSize: 16,
    // margin,
  },
});

export default TextView;

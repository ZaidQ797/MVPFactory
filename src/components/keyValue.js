import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Divider} from 'react-native-elements';
import colors from '../utils/colors';
import {wp} from '../utils/responsive';
import TextView from './text';

const KeyValue = ({
  keyy,
  value,
  style,
  direction = 'row',
  fontSize = 10,
  showDivider = false,
}) => (
  <View
    style={[
      {
        marginVertical: 2,
        marginRight: 4,
      },
    ]}>
    <View style={[style, {flexDirection: direction}]}>
      <TextView
        numberOfLines={1}
        title={keyy}
        type={'normal'}
        color={colors.grey7}
        style={{fontSize: fontSize}}
      />
      <TextView
        numberOfLines={direction !== 'row' ? 2 : 1}
        title={value}
        type={'medium'}
        color={
          value === 'Alive'
            ? colors.primary
            : value === 'Dead'
            ? colors.red
            : colors.black
        }
        style={{fontSize: fontSize}}
      />
    </View>
    {showDivider && <Divider />}
  </View>
);

export default KeyValue;

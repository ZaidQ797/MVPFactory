import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {Overlay} from 'react-native-elements';
import colors from '../utils/colors';
export const Loading = ({visible}) => (
  <Overlay
    isVisible={visible}
    overlayStyle={{
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      width: 100,
    }}>
    <ActivityIndicator animating color={colors.primary} size="large" />
  </Overlay>
);

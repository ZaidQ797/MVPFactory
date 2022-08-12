import React from 'react';
import {View, StyleSheet, TextInput, Text, Platform} from 'react-native';
import colors from '../utils/colors';
import fonts from '../utils/fonts';
import Icon from 'react-native-vector-icons/Ionicons';
import OptionsMenu from 'react-native-option-menu';

const Input = ({onChangeText, value, handleOptionPress}) => (
  <View style={styles.container}>
    <TextInput
      placeholder="Search Movie"
      value={value}
      style={styles.input}
      onChangeText={onChangeText}
    />
  </View>
);

export default Input;
const styles = StyleSheet.create({
  container: {
    padding: Platform.OS == 'ios' ? 10 : 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    width: '98%',
    alignSelf: 'center',
    margin: 10,
    borderRadius: 5,
    borderColor: colors.grey3,
    backgroundColor: 'tomato',
    backgroundColor: colors.tomato,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderRadius: 5,
    fontFamily: fonts.PoppinsRegular,
    color: colors.grey7,
  },
});

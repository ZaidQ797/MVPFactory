import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import TextView from './text';
import Image from './fastImage';
import {hp, wp} from '../utils/responsive';
import KeyValue from './keyValue';
import colors from '../utils/colors';
const GridView = ({item, index, navigation}) => (
  <TouchableOpacity
    style={styles.cardStyle}
    key={item.id}
    onPress={() => {
      navigation.navigate('MovieDetail', {movie: item});
    }}>
    <View style={styles.imageContainer}>
      <Image character={item} style={styles.imageStyle} />
    </View>
    <View style={styles.textContainer}>
      <TextView
        numberOfLines={1}
        title={item.Title}
        type={'medium'}
        color={colors.black}
        style={{fontSize: 14}}
      />
      <KeyValue keyy={'Year: '} value={item.Year} />
      <KeyValue keyy={'imdb ID: '} value={item.imdbID} />

      <KeyValue keyy={'Type: '} value={item?.Type} />
    </View>
  </TouchableOpacity>
);

export default GridView;
const styles = StyleSheet.create({
  cardStyle: {
    flex: 0.5,
    margin: 5,
    backgroundColor: 'white',
    alignItems: 'space-between',
    elevation: 10,
    shadowColor: '#BDBDBD',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    borderColor: colors.grey3,
    borderRadius: 5,
  },
  imageStyle: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,

    width: '100%',
    height: hp(17),
  },
  imageContainer: {alignItems: 'center', width: '100%'},
  textContainer: {
    flex: 0.7,
    width: '100%',
    paddingVertical: 3,
    paddingLeft: 10,
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  keyValueStyle: {
    justifyContent: 'space-between',
  },
});

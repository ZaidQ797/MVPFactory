import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import TextView from './text';
import Image from './fastImage';
import {hp, wp} from '../utils/responsive';
import KeyValue from './keyValue';
import colors from '../utils/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
const ListView = ({item, index, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.cardStyle}
      key={index}
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
};

export default ListView;

const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    backgroundColor: 'white',
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
    borderBottomLeftRadius: 5,
    height: '100%',
    width: '100%',
  },
  imageContainer: {flex: 0.3},
  textContainer: {flex: 0.7, padding: 6, marginLeft: 10},
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    width: '100%',
  },
  keyValueStyle: {
    justifyContent: 'space-between',
  },
});

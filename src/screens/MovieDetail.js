import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/header';
import Image from '../components/fastImage';
import KeyValue from '../components/keyValue';
const MovieDetail = ({route, navigation}) => {
  let {movie} = route?.params;
  return (
    <View style={styles.container}>
      <Header
        title={movie?.Title}
        leftIcon={'chevron-back'}
        onLeftPress={() => {
          navigation.pop();
        }}
      />

      <Image character={movie} style={styles.image} />

      <ScrollView style={styles.detail}>
        <KeyValue
          showDivider
          keyy={'Name: '}
          value={movie?.Title}
          fontSize={15}
          style={styles.keyValueStyle}
        />
        <KeyValue
          showDivider
          keyy={'Year: '}
          value={movie?.Year}
          fontSize={15}
          style={styles.keyValueStyle}
        />
        <KeyValue
          showDivider
          keyy={'imdb ID: '}
          value={movie?.imdbID}
          fontSize={15}
          style={styles.keyValueStyle}
        />
        <KeyValue
          showDivider
          keyy={'Type: '}
          value={movie?.Type}
          fontSize={15}
          style={styles.keyValueStyle}
        />
      </ScrollView>
    </View>
  );
};

export default MovieDetail;
const styles = StyleSheet.create({
  container: {flex: 1},
  image: {flex: 1},
  detail: {
    flex: 0.5,
    padding: 6,
  },
  keyValueStyle: {justifyContent: 'space-between', marginVertical: 10},
});

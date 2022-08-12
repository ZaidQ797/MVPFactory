import React, {useRef, useState} from 'react';
import FastImage from 'react-native-fast-image';
import {View, StyleSheet, LogBox} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../utils/colors';
import {useDispatch, useSelector} from 'react-redux';
import {addToFavorite} from '../redux/actions/app';
import {hp, wp} from '../utils/responsive';
const Image = ({character, style}) => {
  const dispatch = useDispatch();
  const {favorites} = useSelector(state => state.app);
  const handleFav = async () => {
    let ifExists = favorites?.some(item => item.imdbID === character.imdbID);
    let filtered = [];
    if (ifExists) {
      filtered = favorites.filter(elem => {
        return elem.imdbID !== character.imdbID;
      });
    }

    dispatch(
      addToFavorite(character, ifExists ? filtered : [character, ...favorites]),
    );
  };
  const RenderFav = () => {
    const ifExists = favorites?.some(item => {
      return item?.imdbID === character?.imdbID;
    });
    return (
      <Icon name={ifExists ? 'star' : 'staro'} size={wp(4)} color={'white'} />
    );
  };
  return (
    <FastImage
      style={style}
      source={{
        uri: character?.Poster,
        headers: {Authorization: 'someAuthToken'},
        priority: FastImage.priority.high,
      }}>
      <TouchableOpacity
        style={styles.starButton}
        activeOpacity={1}
        onPress={handleFav}>
        <RenderFav />
      </TouchableOpacity>
    </FastImage>
  );
};

export default Image;
const styles = StyleSheet.create({
  starButton: {
    height: hp(4),
    width: wp(8),
    backgroundColor: colors.primary,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import {endPoints} from '../../utils/endpoints';
import {UPDATE_FAVORITE, GET_MOVIES, UPDATE_ORIENTATION} from '../types';
import axios from 'axios';
export const addToFavorite = (character, favorites) => {
  console.log(character, favorites);
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: UPDATE_FAVORITE,
        favorites: favorites,
        characters: getState().app?.characters?.map(item => {
          if (item.id === character.id) {
            return {
              ...item,
              isFav: item?.isFav ? false : true,
            };
          }
          return item;
        }),
      });
    } catch (err) {
      console.log(err.response);
    }
  };
};
export const updateOrientation = orintation => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: UPDATE_ORIENTATION,
        orintation,
      });
    } catch (err) {
      console.log(err.response);
    }
  };
};
export const getMovies = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        'http://www.omdbapi.com/?s=term&apikey=da979bab',
      );

      if (response?.status === 200) {
        console.log(response?.data?.results);

        dispatch({
          type: GET_MOVIES,
          movies: response?.data.Search,
        });
      }
    } catch (err) {
      console.log(err.response);
    }
  };
};

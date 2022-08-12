import {UPDATE_FAVORITE, GET_MOVIES, UPDATE_ORIENTATION} from '../types';

const initialState = {
  favorites: [],
  movies: [],
  orintation: 1,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.movies,
      };

    case UPDATE_FAVORITE:
      return {
        ...state,
        favorites: action.favorites,
        characters: action.characters,
      };

    case UPDATE_ORIENTATION:
      return {
        ...state,
        orintation: action.orintation,
      };
    default:
      return state;
  }
};

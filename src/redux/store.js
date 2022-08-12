import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import combineReducers from './reducers';
import middlewares from './middlewares';
import connectionWater from '../utils/connection';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,

  blacklist: [],
};

const pReducer = persistReducer(persistConfig, combineReducers);

const store = createStore(pReducer, applyMiddleware(...middlewares));

const persister = persistStore(store);
connectionWater();
export {store, persister};

import {combineReducers} from 'redux';

//Import All Reducers
import {appReducer} from './app';

const appRed = combineReducers({
  app: appReducer,
});
// const rootReducer = (state, action) => {
//   // when a logout action is dispatched it will reset redux state
//   if (action.type === LOGOUT) {
//     state = undefined;
//   }

//   return appRed(state, action);
// };
export default appRed;

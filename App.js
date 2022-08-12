import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persister, store} from './src/redux/store';
import AppNav from './src/routes';

LogBox.ignoreLogs(['Warning: ...']);
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <StatusBar barStyle={'light-content'} />

        <AppNav />
      </PersistGate>
    </Provider>
  );
};
export default App;

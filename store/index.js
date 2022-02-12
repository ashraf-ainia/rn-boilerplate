import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './reducers';
import api from '../axios/api';
import Toast from '../components/ui/Toast';
import Loading from '../components/ui/Loading';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['persist'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [ReduxThunk.withExtraArgument({ api })];

const store = createStore(
  persistedReducer,
  compose(composeWithDevTools(applyMiddleware(...middlewares))),
);

export const persistor = persistStore(store);
export const withReduxProvider = Component => props =>
(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SafeAreaView>
        <Component {...props} />
      </SafeAreaView>
    </PersistGate>
    <Toast />
    <Loading />
  </Provider>
);

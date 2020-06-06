import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import Navigator from './src/Navigator';
import rootReducer from './src/Reducers/rootReducer';
import rootSaga from './src/Sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

sagaMiddleware.run(rootSaga);

export default App;

import { createStore, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import reducer from './ducks';
//import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
);

const persistor = persistStore(store);
persistor.purge();
export { store, persistor };
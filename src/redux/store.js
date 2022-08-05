import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// import storage from 'redux-persist/lib/storage';
import reducers from './reducer';
const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: { contacts: reducers },
  middleware,
  devTools: process.env.MODE_ENV === 'development',
});

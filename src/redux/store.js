import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import reducers from './reducer';
// const middleware = [...getDefaultMiddleware(), logger];
import { contactApi } from './operations';

export const store = configureStore({
  reducer: {
    contacts: reducers,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

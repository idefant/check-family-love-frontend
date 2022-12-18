import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import formReducer from './reducers/formSlice';

export const rootReducer = combineReducers({
  form: formReducer,
});

export const setupStore = () => (
  configureStore({ reducer: rootReducer })
);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favorive/slice';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
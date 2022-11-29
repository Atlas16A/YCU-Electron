import { configureStore } from '@reduxjs/toolkit';
import AreaReducer from './user-control-areaSlice';

// eslint-disable-next-line import/prefer-default-export
export const store = configureStore({
  reducer: {
    Area: AreaReducer,
  },
});

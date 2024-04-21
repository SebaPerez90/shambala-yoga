import { configureStore } from '@reduxjs/toolkit';
import loguinSlice from '../features/loguin.slice';

export const store = configureStore({
  reducer: {
    loguin: loguinSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

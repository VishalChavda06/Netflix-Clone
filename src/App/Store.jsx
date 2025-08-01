import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Features/userslice';  // Ensure this path is correct
import userslice from '../Features/userslice';  // check this path too

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

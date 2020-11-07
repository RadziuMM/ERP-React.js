import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './features/storeO';

export default configureStore({
  reducer: {
    movies: movieReducer,
  },
});

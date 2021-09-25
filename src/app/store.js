import { configureStore } from '@reduxjs/toolkit';
import showMeCats from '../features/cats/catsSlice';

export default configureStore({
  reducer: {
    cats: showMeCats,
  },
});

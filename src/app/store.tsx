import { configureStore } from '@reduxjs/toolkit';
import erpReducer from './features/action';

export default configureStore({
  reducer: {
    erp: erpReducer,
  },
});

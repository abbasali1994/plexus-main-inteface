import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './redux/sidebarSlice';

export default configureStore({
  reducer: {
    sidebar: sidebarReducer
  },
});

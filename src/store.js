import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './redux/sidebarSlice';
import themeReducer from './redux/themeSlice';

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
    theme: themeReducer
  },
});

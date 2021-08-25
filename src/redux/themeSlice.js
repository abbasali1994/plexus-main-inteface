import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 'light',
  },
  reducers: {
    toggleTheme: (state, action) => {
      state.value = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;

export const currentTheme = state => state.theme.value;

export default themeSlice.reducer;
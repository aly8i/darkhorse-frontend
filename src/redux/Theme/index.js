import { createSlice } from '@reduxjs/toolkit';

const initialState = { dark: JSON.parse(localStorage.getItem("dark")) };
const ThemeSlice = createSlice({
    name: 'ThemeSlice',
    initialState,
    reducers: {
    setThemeDarkMode(state, action) {
      state.dark = action.payload;
    },
  },
})

export const { setThemeDarkMode } = ThemeSlice.actions
export default ThemeSlice.reducer
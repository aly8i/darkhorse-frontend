import { createSlice } from '@reduxjs/toolkit';

const initialState = { category: null, sector: null, company: null  }

const selectedSlice = createSlice({
  name: 'selectedSlice',
  initialState,
  reducers: {
    selectCategory(state, action) {
      console.log(action);
      state.category = action.payload;
    },
    selectSector(state, action) {
      state.sector = action.payload;
    },
    selectCompany(state, action) {
      state.company = action.payload;
    },
  },
})

export const { selectCategory, selectSector, selectCompany } = selectedSlice.actions;
export default selectedSlice.reducer;
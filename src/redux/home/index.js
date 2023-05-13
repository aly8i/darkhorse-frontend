import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 }

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = homeSlice.actions
export default homeSlice.reducer
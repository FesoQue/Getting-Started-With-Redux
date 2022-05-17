import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    decrement(state) {
      state.counter--;
    },
    reset(state, action) {
      state.counter = action.payload;
    },
    increment(state) {
      state.counter++;
    },
  },
});

export const store = configureStore({
  reducer: counterSlice.reducer,
});

export const { decrement, reset, increment } = counterSlice.actions;
// export const actions = counterSlice.actions;

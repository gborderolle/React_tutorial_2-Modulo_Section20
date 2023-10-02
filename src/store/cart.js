import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { isHidden: true };
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    toogleCart(state) {
      state.isHidden = !state.isHidden;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;

      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity++;
      state.totalAmount += newItem.price;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;

        state.totalAmount = - existingItem.price;
      }
    },

    increment(state) {
      state.totalQuantity++;
    },
    decrement(state) {
      state.totalQuantity--;
    },
    increase(state, action) {
      state.totalQuantity = state.totalQuantity + action.payload; // cualquier parámetro que se mande
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
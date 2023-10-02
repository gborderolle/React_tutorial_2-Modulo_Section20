import { createSlice } from '@reduxjs/toolkit';

const initialUIState = { isHidden: true };
const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUIState,
  reducers: {
    toogleUI(state) {
      state.isHidden = !state.isHidden;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;

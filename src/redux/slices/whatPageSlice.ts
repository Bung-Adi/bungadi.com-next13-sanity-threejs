import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavigationState {
  currentPage: string;
}

const initialState: NavigationState = {
  currentPage: 'home',
};

const navigationSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<string>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = navigationSlice.actions;

export default navigationSlice.reducer;

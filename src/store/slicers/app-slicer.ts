import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAppState, IStoreRootState } from "..";

const initialState: IAppState = {
  loadingState: 0,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    incrementLoadingState(state) {
      state.loadingState = ++state.loadingState;
    },
    decrementLoadingState(state, action: PayloadAction<boolean | undefined>) {
      if (state.loadingState === 0) {
        return;
      }
      state.loadingState = action.payload ? 0 : --state.loadingState;
    },
  },
});

export const selectIsLoading = (state: IStoreRootState) =>
  state.app.loadingState > 0;

export const { incrementLoadingState, decrementLoadingState } =
  appSlice.actions;

export default appSlice.reducer;

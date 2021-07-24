import { combineReducers, configureStore } from "@reduxjs/toolkit";

import appReducer from "./slicers/app-slicer";

export interface IAppState {
  loadingState: number;
}

export interface IStoreRootState {
  app: ReturnType<typeof appReducer>;
}

const combinedReducers = combineReducers<IStoreRootState>({
  app: appReducer,
});

const store = configureStore({
  reducer: combinedReducers,
});

export type AppDispatch = typeof store.dispatch;

export default store;

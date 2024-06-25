// src/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import screenHeightReducer from "./screenHeightSlice";

const store = configureStore({
  reducer: {
    screenHeight: screenHeightReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

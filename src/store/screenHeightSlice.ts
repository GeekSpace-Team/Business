// src/store/screenHeightSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScreenHeightState {
  height: number;
}

const initialState: ScreenHeightState = {
  height: window.innerHeight,
};

const screenHeightSlice = createSlice({
  name: "screenHeight",
  initialState,
  reducers: {
    setScreenHeight(state, action: PayloadAction<number>) {
      state.height = action.payload;
    },
  },
});

export const { setScreenHeight } = screenHeightSlice.actions;
export default screenHeightSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IinitialState {
  headerModalOpen: boolean;
}

const initialState: IinitialState = {
  headerModalOpen: false,
};

export const utilitySlice = createSlice({
  name: "utilitySlice",
  initialState,
  reducers: {
    setHeaderModalOpen: (state) => {
      state.headerModalOpen = !state.headerModalOpen;
    },
  },
});

export const { setHeaderModalOpen } = utilitySlice.actions;
export default utilitySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ToolBarState {
  items: any;
}

const initialState: ToolBarState = {
  items: [],
};

export const ToolBarReducer = createSlice({
  name: "toolbar",
  initialState,
  reducers: {
    getItems: (state: ToolBarState) => {
      return state.items;
    },
  },
});

export const { getItems } = ToolBarReducer.actions;

export default ToolBarReducer.reducer;

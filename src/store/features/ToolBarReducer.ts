import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ToolBarState {
  items: any;
}

const initialState: ToolBarState = {
  items: [
    { id: 1, title: "Headline", value: "" },
    { id: 2, title: "Paragraph", value: "" },
    { id: 4, title: "Image", value: "" },
    { id: 3, title: "Button", value: "" },
  ],
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

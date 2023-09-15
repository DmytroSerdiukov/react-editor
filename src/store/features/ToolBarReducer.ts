import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ToolBarState {
  items: any;
}

enum ItemType {
  Headline,
  Paragraph,
  Image,
  Button,
}

const initialState: ToolBarState = {
  items: [
    { id: 1, title: "Headline", type: ItemType.Headline, value: "" },
    { id: 2, title: "Paragraph", type: ItemType.Paragraph, value: "" },
    { id: 3, title: "Image", type: ItemType.Image, value: "" },
    { id: 4, title: "Button", type: ItemType.Button, value: "" },
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

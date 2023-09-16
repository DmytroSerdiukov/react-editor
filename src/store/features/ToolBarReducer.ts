import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Item, ItemType } from "../types";

export interface ToolBarState {
  items: Array<Item> | any;
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
    getItems: (state: ToolBarState) => state.items,
  },
});

export const { getItems } = ToolBarReducer.actions;

export default ToolBarReducer.reducer;

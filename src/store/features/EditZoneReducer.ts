import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Item {
  id: number;
  title: string;
  value: string;
}
export interface EditZoneState {
  items: any;
}

const initialState: EditZoneState = {
  items: [],
};

export const EditZoneReducer = createSlice({
  name: "toolbar",
  initialState,
  reducers: {
    createNewItem: (state, action) => {
      state.items.push(action.payload);
    },
    getItems: (state: EditZoneState) => {
      return state.items;
    },
  },
});

export const { getItems } = EditZoneReducer.actions;

export default EditZoneReducer.reducer;

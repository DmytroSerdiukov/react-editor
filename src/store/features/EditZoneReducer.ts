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
      state.items.push({
        id: state.items.length,
        title: action.payload,
        value: "",
      });
    },
    cloneItem: (state, action) => {
      state.items.push({ ...action.payload, id: state.items.length });
    },
    changeItemValue: (state, action) => {
      const { id, value } = action.payload;
      state.items[id].value = value;
    },

    deleteEditItem: (state, action) => {
      state.items = state.items.filter((el: any) => el.id !== action.payload);
    },
    getItems: (state: EditZoneState) => {
      return state.items;
    },
  },
});

export const {
  getItems,
  createNewItem,
  changeItemValue,
  deleteEditItem,
  cloneItem,
} = EditZoneReducer.actions;

export default EditZoneReducer.reducer;

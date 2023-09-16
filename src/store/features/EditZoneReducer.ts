import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { randomId } from "../../utils/randomId";
import { Item, ItemValues } from "../types";

export interface EditZoneState {
  items: Item[] | any;
}

const initialState: EditZoneState = {
  items: [],
};

interface ItemData {
  title: string;
  type: number;
}

export const EditZoneReducer = createSlice({
  name: "toolbar",
  initialState,
  reducers: {
    createNewItem: (state: EditZoneState, action: PayloadAction<ItemData>) => {
      const { title, type } = action.payload;
      const newItem: Item = {
        id: randomId(),
        title: title,
        type: type,
        value: "",
      };
      state.items = [...state.items, newItem];
    },
    cloneItem: (state: EditZoneState, action: PayloadAction<Item>) => {
      state.items = [...state.items, { ...action.payload, id: randomId() }];
    },
    changeItemValue: (
      state: EditZoneState,
      action: PayloadAction<ItemValues>
    ) => {
      const { id, value } = action.payload;
      state.items = state.items.map((el: Item) => {
        if (el.id === id) {
          return { ...el, value };
        }
        return el;
      });
    },

    deleteEditItem: (state: EditZoneState, action: PayloadAction<string>) => {
      state.items = state.items.filter((el: Item) => el.id !== action.payload);
    },
    getItems: (state: EditZoneState) => {
      return state.items;
    },
    moveItemUp: (state: EditZoneState, action: PayloadAction<string>) => {
      state.items.map((el: Item, i: number) => {
        if (el.id === action.payload) {
          if (i === 0) return;
          const previous = state.items[i - 1];
          state.items[i - 1] = el;
          state.items[i] = previous;
        }
      });
    },
    moveItemDown: (state: EditZoneState, action: PayloadAction<string>) => {
      const index = state.items.map((el: any) => el.id).indexOf(action.payload);
      state.items.map((el: Item, i: number) => {
        if (i === index) {
          if (i === state.items.length - 1) return;
          const curr = state.items[index];
          state.items[index] = state.items[index + 1];
          state.items[index + 1] = curr;
        }
      });
    },
  },
});

export const {
  getItems,
  createNewItem,
  changeItemValue,
  deleteEditItem,
  cloneItem,
  moveItemUp,
  moveItemDown,
} = EditZoneReducer.actions;

export default EditZoneReducer.reducer;

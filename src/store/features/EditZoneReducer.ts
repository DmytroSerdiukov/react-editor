import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { randomUUID } from "crypto";
import { randomId } from "../../utils/randomId";
import { current } from "immer";

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
      const { title, type } = action.payload;
      const newItem = {
        id: randomId(),
        title: title,
        type: type,
        value: "",
      };
      state.items = [...state.items, newItem];
    },
    cloneItem: (state, action) => {
      state.items = [...state.items, { ...action.payload, id: randomId() }];
    },
    changeItemValue: (state, action) => {
      const { id, value } = action.payload;
      state.items = state.items.map((el: any) => {
        if (el.id === id) {
          return { ...el, value };
        }
        return el;
      });
    },

    deleteEditItem: (state, action) => {
      state.items = state.items.filter((el: any) => el.id !== action.payload);
    },
    getItems: (state: EditZoneState) => {
      return state.items;
    },
    moveItemUp: (state, action) => {
      state.items.map((el: any, i: number) => {
        if (el.id === action.payload) {
          if (i === 0) return;
          const previous = state.items[i - 1];
          state.items[i - 1] = el;
          state.items[i] = previous;
        }
      });
    },
    moveItemDown: (state, action) => {
      const index = state.items.map((el: any) => el.id).indexOf(action.payload);
      state.items.map((el: any, i: number) => {
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

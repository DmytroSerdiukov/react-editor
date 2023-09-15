import { configureStore } from "@reduxjs/toolkit";
import ToolBarReducer from "./features/ToolBarReducer";

export const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

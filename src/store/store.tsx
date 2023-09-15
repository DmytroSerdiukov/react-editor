import { configureStore } from "@reduxjs/toolkit";
import ToolBarReducer from "./features/ToolBarReducer";
import EditZoneReducer from "./features/EditZoneReducer";

export const store = configureStore({
  reducer: {
    toolbar: ToolBarReducer,
    editzone: EditZoneReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

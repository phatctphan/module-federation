import { configureStore } from "@reduxjs/toolkit";
import todoReducer, {
  initialState as TodoSliceInitalState,
  // @ts-ignore
} from "Sample4/TodoSlice";

const initialState = {
  todoReducer: {
    ...TodoSliceInitalState,
    items: [
      { id: 1, content: "Milk", status: "pending" },
      { id: 2, content: "Apple 🍎", status: "pending" },
      { id: 2, content: "Pizz 🍕", status: "completed" },
    ],
  },
};

export const store = configureStore({
  reducer: {
    todoReducer,
  },
  preloadedState: initialState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

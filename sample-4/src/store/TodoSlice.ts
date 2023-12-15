import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodoItemModel, TodoStatus } from "../components/TodoModel";
import { RootState } from ".";

export type TodoState = {
  items: TodoItemModel[];
  filter: {
    status: TodoStatus | null;
  };
};

export type TodoStatistics = {
  total: number;
  completed: number;
  pending: number;
};

const initialState: TodoState = {
  items: [],
  filter: {
    status: null,
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  selectors: {},
  reducers: {
    // Create a new todo item
    createItem: (state, action: PayloadAction<string>) => {
      state.items.push({
        id: state.items.length + 1,
        content: action.payload,
        status: TodoStatus.PENDING,
      });
    },

    // Delete a todo item
    deleteItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const updated = state.items.filter((item) => item.id !== id);
      state.items = updated;
    },

    // Toggle todo item status
    toggleCompletion: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const found = state.items.filter((item) => item.id === id)[0];

      // Toggle completation status based on the current status
      let next = TodoStatus.PENDING;
      if (found.status === TodoStatus.PENDING) {
        next = TodoStatus.COMPLETED;
      }
      found.status = next;
    },

    // Set filter status
    setFilterStatus: (state, action: PayloadAction<TodoStatus | null>) => {
      state.filter.status = action.payload;
    },
  },
});

export const selectTodo = (state: RootState) => {
  const { items, filter } = state.todoReducer;
  let computedItems = [];
  if (filter.status !== null) {
    computedItems = items.filter((item) => item.status === filter.status);
  } else {
    computedItems = [...items];
  }

  return {
    items: computedItems.reverse(),
    filter,
    statistics: getStatistics(items),
  };
};

function getStatistics(items: TodoItemModel[]): TodoStatistics {
  const total = items.length;
  let completed = 0;
  let pending = 0;

  items.forEach((item) => {
    completed += item.status === TodoStatus.COMPLETED ? 1 : 0;
    pending += item.status === TodoStatus.PENDING ? 1 : 0;
  });

  return {
    total,
    completed,
    pending,
  };
}

export const { createItem, toggleCompletion, setFilterStatus, deleteItem } =
  todoSlice.actions;
export default todoSlice.reducer;

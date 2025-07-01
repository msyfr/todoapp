import { configureStore, createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    setTodos: (state, action) => action.payload,
    addTodo: (state, action) => { state.push(action.payload); },
    toggleTodo: (state, action) => {
      const todo = state.find(t => t.id === action.payload);
      if (todo) todo.done = !todo.done;
    },
    deleteTodo: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    },
  },
});

export const { setTodos, addTodo, toggleTodo, deleteTodo } = todosSlice.actions;

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export default store; 
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTodos, addTodo as addTodoAction, toggleTodo as toggleTodoAction, deleteTodo as deleteTodoAction } from '../../common/Store/store';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { createTodo, fetchTodos, removeTodo, toggleTodo } from '../../common/API/api';


const Todo = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const loadTodos = async () => {
    setLoading(true);
    try {
      const data = await fetchTodos();
      dispatch(setTodos(data));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const todo = await createTodo(title);
    dispatch(addTodoAction(todo));
    setTitle('');
  };

  const handleToggle = async (id) => {
    await toggleTodo(id);
    dispatch(toggleTodoAction(id));
  };

  const handleDelete = async (id) => {
    await removeTodo(id);
    dispatch(deleteTodoAction(id));
  };

  return (
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700 drop-shadow">Todo List</h1>
        <TodoForm title={title} setTitle={setTitle} addTodo={addTodo} />
        {loading ? 
        <p className="text-center text-blue-500">Chargement...</p> 
        : (
          <TodoList todos={todos} toggleDone={handleToggle} deleteTodo={handleDelete} />
        )}
      </div>
  );
}

export default Todo; 
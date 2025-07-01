import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, toggleDone, deleteTodo }) => {
  return (
    <ul className="list-none p-0 bg-blue-50 rounded-lg divide-y divide-blue-100">
      {todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo} toggleDone={toggleDone} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList; 
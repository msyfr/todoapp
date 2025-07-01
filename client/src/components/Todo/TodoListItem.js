import React from 'react';

const TodoListItem = ({ todo, toggleDone, deleteTodo }) => {
  return (
    <li className="py-2 px-2 flex items-center group hover:bg-blue-100 transition rounded">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleDone(todo.id)}
        className="mr-3 accent-blue-500 w-5 h-5 rounded focus:ring-2 focus:ring-blue-400"
      />
      <span className={todo.done ? 'line-through text-gray-400 italic' : 'text-gray-800'}>{todo.title}</span>
      {todo.done && (
        <button
          onClick={() => deleteTodo(todo.id)}
          className="ml-auto px-3 py-1 bg-red-500 text-white rounded shadow hover:bg-red-600 transition text-sm"
        >
          Delete
        </button>
      )}
    </li>
  );
}

export default TodoListItem; 
import React from 'react';

const TodoForm = ({ title, setTitle, addTodo }) => {
  return (
    <form onSubmit={addTodo} className="mb-5 flex gap-2">
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Add Todo"
        className="p-2 flex-1 border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />
      <button type="submit" className="p-2 px-4 bg-blue-500 text-white rounded shadow hover:bg-blue-600">Add</button>
    </form>
  );
}

export default TodoForm; 
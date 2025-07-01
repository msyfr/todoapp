const API_URL = process.env.API_URL || 'http://localhost:3001';

export async function fetchTodos() {
  const res = await fetch(`${API_URL}/todos`);
  if (!res.ok) throw new Error('Problem fetching todos');
  return res.json();
}

export async function createTodo(title) {
  const res = await fetch(`${API_URL}/todos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });
  if (!res.ok) throw new Error('Problem creating todo');
  return res.json();
}

export async function toggleTodo(id) {
  const res = await fetch(`${API_URL}/todos/${id}`, { method: 'PUT' });
  if (!res.ok) throw new Error('Problem toggling todo');
  return res.json();
}

export async function removeTodo(id) {
  const res = await fetch(`${API_URL}/todos/${id}`, { method: 'DELETE' });
  if (!res.ok && res.status !== 204) throw new Error('Problem deleting todo');
} 
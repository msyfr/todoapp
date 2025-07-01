import express from 'express';
import cors from 'cors';
import { getTodos, addTodo, toggleTodo, deleteTodo } from './db.js';

// Hello! This is the Express Backend for the Todo List App.
// I have added a tiny sqlite database to store the data for testing purposes. 
// This database logic of the app is encapuslated in the db.js file.
// You can update if you want to use a different database or an in-memory array.

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/todos', (req, res) => {
  getTodos((err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows.map(t => ({ ...t, done: !!t.done })));
  });
});

app.post('/todos', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });
  addTodo(title, (err, todo) => {
    if (err) return res.status(500).json({ error: err.message });
    todo.done = !!todo.done;
    res.status(201).json(todo);
  });
});

app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  toggleTodo(id, (err, updated) => {
    if (err) {
      if (err.message === 'Todo not found') return res.status(404).json({ error: err.message });
      return res.status(500).json({ error: err.message });
    }
    updated.done = !!updated.done;
    res.json(updated);
  });
});

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  deleteTodo(id, (err, changes) => {
    if (err) return res.status(500).json({ error: err.message });
    if (changes === 0) return res.status(404).json({ error: 'Todo not found' });
    res.status(204).end();
  });
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
}); 
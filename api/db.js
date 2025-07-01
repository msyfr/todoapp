import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./todos.db', (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
    db.run(`CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      done INTEGER NOT NULL DEFAULT 0
    )`);
  }
});

export function getTodos(callback) {
  db.all('SELECT * FROM todos', [], (err, rows) => {
    callback(err, rows);
  });
}

export function addTodo(title, callback) {
  db.run('INSERT INTO todos (title, done) VALUES (?, 0)', [title], function(err) {
    if (err) return callback(err);
    db.get('SELECT * FROM todos WHERE id = ?', [this.lastID], (err, todo) => {
      callback(err, todo);
    });
  });
}

export function toggleTodo(id, callback) {
  db.get('SELECT * FROM todos WHERE id = ?', [id], (err, todo) => {
    if (err || !todo) return callback(err || new Error('Todo not found'));
    const newDone = todo.done ? 0 : 1;
    db.run('UPDATE todos SET done = ? WHERE id = ?', [newDone, id], function(err) {
      if (err) return callback(err);
      db.get('SELECT * FROM todos WHERE id = ?', [id], (err, updated) => {
        callback(err, updated);
      });
    });
  });
}

export function deleteTodo(id, callback) {
  db.run('DELETE FROM todos WHERE id = ?', [id], function(err) {
    callback(err, this.changes);
  });
} 
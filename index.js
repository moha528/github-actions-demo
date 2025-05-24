const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

// Servir le dossier public
app.use(express.static(path.join(__dirname, 'public')));

let todos = [];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Route DELETE pour supprimer une tâche par son index
app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id) || id < 0 || id >= todos.length) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  const removed = todos.splice(id, 1);
  res.json(removed[0]);
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app; // Export pour les tests 
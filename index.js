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

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app; // Export pour les tests 
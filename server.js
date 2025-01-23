const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// In-memory todo list (Replace with a database for persistence)
let todos = [];

// GET: Fetch all todos
app.get('/api/todos', (req, res) => {
    res.json(todos);
});

// POST: Add a new todo
app.post('/api/todos', (req, res) => {
    const { text } = req.body;

    if (!text || text.trim() === '') {
        return res.status(400).json({ error: 'Todo text is required.' });
    }

    const newTodo = { id: Date.now(), text };
    todos.push(newTodo);

    res.status(201).json(newTodo);
});

// PUT: Update a todo by ID
app.put('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    const { text } = req.body;

    const todo = todos.find((t) => t.id === parseInt(id));

    if (!todo) {
        return res.status(404).json({ error: 'Todo not found.' });
    }

    todo.text = text;

    res.json(todo);
});

// DELETE: Delete a todo by ID
app.delete('/api/todos/:id', (req, res) => {
    const { id } = req.params;

    todos = todos.filter((t) => t.id !== parseInt(id));

    res.status(204).send();
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

let todos = [];

app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    const { text } = req.body;
    if (!text || text.trim() === '') {
        return res.status(400).json({ error: 'Todo text is required.' });
    }
    const newTodo = { id: Date.now(), text };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

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

app.delete('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    todos = todos.filter((t) => t.id !== parseInt(id));
    res.status(204).send();
});

module.exports = app; // Export app for serverless deployment

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend')));

let items = [];
let nextId = 1;

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.post('/api/items', (req, res) => {
  const item = { id: nextId++, text: req.body.text };
  items.push(item);
  res.status(201).json(item);
});

app.put('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = items.find(i => i.id === id);
  if (item) {
    item.text = req.body.text;
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

app.delete('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = items.findIndex(i => i.id === id);
  if (index !== -1) {
    items.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

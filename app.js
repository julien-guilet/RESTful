
const express = require('express');
const app = express();
app.use(express.json());

// Seed data
let seeds = [
  { id: 1, name: 'Seed 1', description: 'This is seed 1' },
  { id: 2, name: 'Seed 2', description: 'This is seed 2' },
  { id: 3, name: 'Seed 3', description: 'This is seed 3' }
];

// Get all seeds
app.get('/seeds', (req, res) => {
  res.json(seeds);
});

// Get a specific seed
app.get('/seeds/:id', (req, res) => {
  const seedId = parseInt(req.params.id);
  const seed = seeds.find(seed => seed.id === seedId);
  if (seed) {
    res.json(seed);
  } else {
    res.status(404).json({ error: 'Seed not found' });
  }
});

// Create a new seed
app.post('/seeds', (req, res) => {
  const newSeed = req.body;
  seeds.push(newSeed);
  res.status(201).json(newSeed);
});

// Update a seed
app.put('/seeds/:id', (req, res) => {
  const seedId = parseInt(req.params.id);
  const updatedSeed = req.body;
  const index = seeds.findIndex(seed => seed.id === seedId);
  if (index !== -1) {
    seeds[index] = { ...seeds[index], ...updatedSeed };
    res.json(seeds[index]);
  } else {
    res.status(404).json({ error: 'Seed not found' });
  }
});

// Delete a seed
app.delete('/seeds/:id', (req, res) => {
  const seedId = parseInt(req.params.id);
  const index = seeds.findIndex(seed => seed.id === seedId);
  if (index !== -1) {
    const deletedSeed = seeds.splice(index, 1)[0];
    res.json(deletedSeed);
  } else {
    res.status(404).json({ error: 'Seed not found' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

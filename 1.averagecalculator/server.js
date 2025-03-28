const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Simple GET route for browser testing
app.get('/', (req, res) => {
  res.send('Welcome to the Average Calculator API. Use POST /calculate-average to get results.');
});

// POST API to calculate average
app.post('/calculate-average', (req, res) => {
  const numbers = req.body.numbers;

  // Validate input
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return res.status(400).json({ error: 'Invalid input. Provide an array of numbers.' });
  }

  // Calculate average
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;

  res.json({ average });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


  

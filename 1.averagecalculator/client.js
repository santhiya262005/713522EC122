const fetch = require('node-fetch');

async function calculateAverage() {
  const response = await fetch('http://localhost:3000/calculate-average', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ numbers: [10, 20, 30, 40, 50] })
  });

  const result = await response.json();
  console.log('Average:', result.average);
}

calculateAverage();

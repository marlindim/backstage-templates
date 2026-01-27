const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    service: '${{values.name}}',
    status: 'running',
    message: 'Hello from Backstage template!'
  });
});

app.listen(port, () => {
  console.log(`Service listening on port ${port}`);
});

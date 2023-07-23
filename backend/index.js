const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000; // Change this to any available port you prefer

app.use(cors());
app.use(bodyParser.json());

app.post('/api/register', (req, res) => {
  const { name, email, password,e_balance } = req.body;
  // You can perform registration logic here, like saving data to a database
  console.log('Received registration data:', name, email, password,e_balance);
  res.status(200).send('Registration successful!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const connectDB = require('./config/db');
connectDB();


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

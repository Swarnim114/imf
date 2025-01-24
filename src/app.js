const express = require('express');
const cors = require('cors');
const gadgetsRouter = require('./routes/gadgets'); // Ensure this path is correct

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/gadgets', gadgetsRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.get('/', (req, res) => {
    res.send('IMF Gadget API is running!');
  });

module.exports = app;

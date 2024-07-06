const express = require('express');
const cors = require('cors');
const app = express();

// Settings
app.set('Port', process.env.PORT || 2700);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', require('./routes/users'))

module.exports = app;

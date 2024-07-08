const express = require('express');
const cors = require('cors');
const app = express();

// Settings
app.set('Port', process.env.PORT || 2700);

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/books', require('./routes/books'));
app.use('/api/loans', require('./routes/loans'));
app.use('/', require('./routes/access'))

module.exports = app;

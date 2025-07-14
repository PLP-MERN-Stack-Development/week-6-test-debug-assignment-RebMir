const express = require('express');
const bugRoutes = require('./routes/bugRoutes');
const app = express();

app.use(express.json());
app.use('/api/bugs', bugRoutes);

module.exports = app;
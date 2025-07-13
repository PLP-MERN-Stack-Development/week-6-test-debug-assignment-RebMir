const mongoose = require('mongoose');
const app = require('./src/app');

const port = process.env.PORT || 5000;

mongoose
    .connect('mongodb://localhost:27017/bugTracker')
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });
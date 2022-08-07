const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware.js');
const connectDB = require('./config/db.js');

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const scoreRoute = require('./routes/scoreRoute.js');

app.use('/api/scores', scoreRoute);

app.get('/', (req, res) => {
    res.send('OK OK OK');
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
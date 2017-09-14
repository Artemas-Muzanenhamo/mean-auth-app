// Bringing in all our dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Use Mongo Client and Configuration
mongoose.connect(config.database, {
    useMongoClient: config.useMongoClient,
});

// On Database Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});

// On Database Error
mongoose.connection.on('error', (err) => {
    console.log('Database Error: ' + err);
});

// Initalise our app variable with express
const app = express();

const users = require('./routes/users');

// Variable for our port
const port = 3000;

// Enable the application to use CORS
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Enable Body-Parser Middleware
app.use(bodyParser.json());

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

// Start Server
app.listen(port, () => {
    console.log('Server started on port ' + port);
});
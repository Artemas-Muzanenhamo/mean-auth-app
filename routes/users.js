const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtken');

//Model
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) ={
        if (err){
            res.json({succes: false, msg:'Failed to Register User'});
        } else {
            res.json({succes: true, msg:'User Registered!'});
        }
    });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
});

// Profile
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

module.exports = router;
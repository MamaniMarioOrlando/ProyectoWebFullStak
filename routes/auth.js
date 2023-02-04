const express = require('express');
const router = express.Router();

const { register,changePasword,checked,login,sendToken,verifyToken } = require('../controller/authController');

router
    .post('/register',register)
    .post('/login',login)
    .get('/checked',checked)
    .post('/sent-tocken',sendToken)
    .route('/reset-password')
        .get(verifyToken)
        .post(changePasword)

module.exports = router; 
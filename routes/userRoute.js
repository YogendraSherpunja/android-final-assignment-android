const express = require('express');
const AuthController = require('../controllers/auth/authController');

const Router = express.Router();

Router.post('/signup', AuthController.signUp);
Router.post('/login', AuthController.logIn);

module.exports = Router;
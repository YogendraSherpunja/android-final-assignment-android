const express = require("express");
const AuthController = require("../controllers/auth/authController");
const userController = require("../controllers/userController");

const Router = express.Router();

Router.post("/signup", AuthController.signUp);
Router.post("/login", AuthController.logIn);
Router.put("/updateprofile/:id", userController.updateProfile);
Router.get("/userDetail/:id", userController.userDetail);

module.exports = Router;

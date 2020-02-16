const express = require("express");
const CommentController = require("../controllers/commentController");
const Router = express.Router();

Router.post("/comment", CommentController.addComment);
Router.get("/comment", CommentController.viewComment);

module.exports = Router;

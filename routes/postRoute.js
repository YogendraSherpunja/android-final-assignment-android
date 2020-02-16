const express = require("express");
const PostController = require("../controllers/postController");

const Router = express.Router();

Router.post("/post", PostController.addPost);
Router.get("/getpost", PostController.getPost);
Router.get("/viewpost", PostController.viewPost);
Router.delete("/deletepost/:id", PostController.deletePost);
Router.put("/updatepost/:id", PostController.updatePost);

module.exports = Router;

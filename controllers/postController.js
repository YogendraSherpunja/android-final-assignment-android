const Post = require("../models/post");

class PostController {
  addPost(req, res) {
    req.body.createdAt = new Date();
    var newPost = new Post(req.body);
    newPost
      .save()
      .then(newPost => res.json({ newPost }))
      .catch(error => res.json({ error }));
  }

  viewPost(req, res) {
    Post.find()
      .sort({ createdAt: -1 })
      .populate("user")
      .then(post => res.json(post))
      .catch(er => res.send(er));
  }

  getPost(req, res) {
    var post = Post.find()
      .populate("user")
      .then(post => res.json({ post: post }))
      .catch(error => res.json({ error }));
  }

  deletePost(req, res) {
    Post.findByIdAndDelete(req.params.id)
      .then(function() {
        res.send("deleted");
      })
      .catch(error => res.json({ error }));
  }

  updatePost(req, res) {
    console.log(req.params.id);
    Post.findByIdAndUpdate(req.params.id, req.body)
      .then(function() {
        res.send("Post Update Successfully ");
      })
      .catch(function(er) {
        res.send(er);
      });
  }
}

module.exports = new PostController();

const comment = require("../models/comment");

class CommentController {
  addComment(req, res) {
    var newComment = new comment(req.body);

    newComment
      .save()
      .then(newComment => res.json({ newComment }))
      .catch(error => res.json({ error }));
  }

  viewComment(req, res) {
    comment
      .find()
      .sort({ createdAt: -1 })
      .populate("user")
      .then(post => res.json(post))
      .catch(er => res.send(er));
  }
}

module.exports = new CommentController();

const mongoose = require("mongoose");
const User = require("./user");
const Post = require("./post");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  postid: {
    type: Schema.Types.ObjectId,
    ref: Post
  },
  userid: {
    type: Schema.Types.ObjectId,
    ref: User
  },
  comment: {
    type: String,
    trim: true
  },
  firstname: String,
  lastname: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Comment = mongoose.model("comment", commentSchema);
module.exports = Comment;

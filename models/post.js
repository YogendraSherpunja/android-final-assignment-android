const mongoose = require("mongoose");
const User = require("./user");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: User
  },
  status: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    trim: true
  }
});

const Post = mongoose.model("post", postSchema);
module.exports = Post;

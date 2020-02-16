const user = require("../models/user");

class userController {
  updateProfile(req, res) {
    user
      .findByIdAndUpdate(req.params.id, req.body)
      .then(function() {
        return res.send("user successfully updated");
      })
      .catch(function(er) {
        return res.send(er);
      });
  }

  userDetail(req, res) {
    console.log(req.params.id);
    user
      .findById(req.params.id)
      .then(function(users) {
        return res.json(users);
      })
      .catch(function(e) {
        return res.send(e);
      });
  }
}

module.exports = new userController();

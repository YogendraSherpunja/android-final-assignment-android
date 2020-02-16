const User = require('../../models/user');

class AuthController {
    async logIn(req, res) {
        try {
            const user = await User.checkCrediantialsDb(req.body.email, req.body.password);
            const token = await user.generateAuthToken();
            res.json({success:true, user, token });
        } catch (e) {
            res.status(400).send();
            console.log(e);
        }
    }
    async signUp(req, res) {
        var newUser = new User(req.body);
        newUser.save().then(function (user) {
            res.json({ success: true, user: user });
        }).catch(function (e) {
            res.json({ success: false, error: e.message });
        });

    }
}

module.exports = new AuthController();


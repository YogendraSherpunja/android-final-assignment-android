const User =require('../../models/user');

class AuthController {
    async logIn (req, res) {
        try {
            const user = await User.checkCrediantialsDb(req.body.email, req.body.password);
            const token = await user.generateAuthToken();
            res.send({ user, token });
        } catch (e) {
            res.status(400).send();
            console.log(e);
        }
    }
    async signUp(req, res) {
        var newUser = new USER(req.body);
        newUser.save().then(function () {
            res.send('New Account Registered');
        }).catch(function (e) {
            res.send(e);
        });

    }
}

module.exports = new AuthController();


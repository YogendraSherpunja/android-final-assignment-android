const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
 
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    phone:{
        type:String,
        required:true,
        trim:true
    },
    gender:{
        type:String,
        required:true,
        trim:true
    },

    bio:{
        type:String,
        trim:true
    },

    address:{ 
        type:String,
        trim:true
        
    },

    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});

userSchema.statics.checkCrediantialsDb = async (user11, pass11) => {
    const user1 = User.findOne({ email: user11, password: pass11 });
    return user1;
}

userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, 'mynewtoken');
    console.log(token);
    user.tokens = user.tokens.concat({ token: token });
    await user.save();
    return token;
}

const User = mongoose.model('user', userSchema);
module.exports = User;
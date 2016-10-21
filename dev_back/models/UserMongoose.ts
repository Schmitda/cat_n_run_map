import mongoose = require("mongoose");
import IUser = require("./IUser");

interface IUserModel extends IUser, mongoose.Document { }

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    password: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
});

var User = mongoose.model<IUserModel>("User", userSchema);
export = User;
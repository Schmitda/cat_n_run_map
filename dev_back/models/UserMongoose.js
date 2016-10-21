"use strict";
var mongoose = require("mongoose");
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
    email: {
        type: String,
        required: true,
    },
});
var User = mongoose.model("User", userSchema);
module.exports = User;
//# sourceMappingURL=UserMongoose.js.map
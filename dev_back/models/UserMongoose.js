"use strict";
var mongoose = require("mongoose");
var Encrypter_1 = require("../helpers/Encrypter");
var Rx = require('rx');
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
    createdAt: {
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
    verificationUrl: String,
    sessionPassword: String,
});
userSchema.pre('save', function (next) {
    console.log(this.isNew);
    var now = new Date();
    this.updated_at = now;
    var _this = this;
    if (this.isNew) {
        var encrypter = new Encrypter_1.Encrypter();
        var obs1 = encrypter.encryptPassword(this.password);
        var obs3 = encrypter.generateRandom(25);
        var obs2 = encrypter.generateRandom(20);
        Rx.Observable.forkJoin(obs1, obs2, obs3)
            .subscribe(function (val1) {
            _this.password = val1[0];
            _this.verificationUrl = val1[1] + (new Buffer(_this.email)).toString('base64');
            _this.sessionPassword = val1[2] + (new Buffer(_this.email)).toString('base64');
            _this.markModified('password');
            next();
        }, function (err) { }, function (complete) { });
    }
    else {
        if (this.password !== undefined && this.password.isModified) {
            // TODO Implement what if password is changed!
            next();
        }
        else {
            next();
        }
    }
});
var User = mongoose.model("User", userSchema);
module.exports = User;
//# sourceMappingURL=UserMongoose.js.map
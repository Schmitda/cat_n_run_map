"use strict";
var express = require("express");
var User = require('../../models/UserMongoose');
var Encrypter_1 = require("../../helpers/Encrypter");
var userRouter = express.Router();
userRouter.get('/createNatiiDaniel', function (req, res) {
    var daniel = new User({
        email: "dani.schmitz@live.de",
        username: 'Schmitda',
        firstname: 'Daniel',
        lastname: 'Schmitz',
        password: "Test123"
    });
    var natii = new User({
        email: "naadl.93@gmail.com",
        username: 'Muryoutaisuu',
        firstname: 'Natalie',
        lastname: 'Fioretti',
        password: "Test123"
    });
    daniel.save()
        .then(function (daniel) {
        return natii.save();
    })
        .then(function (natii) {
        res.json(true);
    }).catch(function (err) {
        res.status(400).send(err);
    });
});
userRouter.post('/login', function (req, res) {
    User.findOne({ username: req.body.username }).exec(function (err, user) {
        if (err)
            res.status(400).send(err);
        console.log(user);
        var encrypter = new Encrypter_1.Encrypter();
        encrypter.verifyPassword(req.body.password, user.password)
            .subscribe(function (result) {
            console.log(result);
            req.session.user = user;
            res.json(true);
        });
    });
});
userRouter.get('/session', function (request, response) {
    response.json(request.session.user || {});
});
userRouter.get('/logoff', function (req, res) {
    req.session.destroy(function () { });
    res.json(true);
});
module.exports = userRouter;
//# sourceMappingURL=user-router.js.map
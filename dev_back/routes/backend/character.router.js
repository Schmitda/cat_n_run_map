"use strict";
var express = require("express");
var Character = require('../../models/CharacterMongoose');
var characterRouter = express.Router();
characterRouter.get('/', function (req, res) {
    Character.find().exec()
        .then(function (result) {
        res.json(result);
    });
});
characterRouter.get('/:id', function (req, res) {
    Character.findById(req.params.id).exec()
        .then(function (result) {
        res.json(result);
    });
});
characterRouter.post('/', function (req, res) {
    var character = new Character(req.body);
    Character.createdBy = req.session.user;
    character.save()
        .then(function (character) {
        res.json(character);
    });
});
characterRouter.delete('/:id', function (req, res) {
    Character.findByIdAndRemove(req.params.id, function (err, character) {
        if (err)
            res.status(400).json(err);
        res.json(true);
    });
});
characterRouter.put('/:id', function (req, res) {
    Character.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function (err, character) {
        if (err)
            res.status(400).json(err);
        res.json(character);
    });
});
module.exports = characterRouter;
//# sourceMappingURL=character.router.js.map
"use strict";
var express = require("express");
var Decoration = require('../../models/DecorationMongoose');
var decorationRouter = express.Router();
decorationRouter.get('/', function (req, res) {
    Decoration.find().exec()
        .then(function (result) {
        res.json(result);
    });
});
decorationRouter.get('/:id', function (req, res) {
    Decoration.findById(req.params.id).exec()
        .then(function (result) {
        res.json(result);
    });
});
decorationRouter.post('/', function (req, res) {
    var decoration = new Decoration(req.body);
    Decoration.createdBy = req.session.user;
    decoration.save()
        .then(function (decoration) {
        res.json(decoration);
    });
});
decorationRouter.delete('/:id', function (req, res) {
    Decoration.findByIdAndRemove(req.params.id, function (err, decoration) {
        if (err)
            res.status(400).json(err);
        res.json(true);
    });
});
decorationRouter.put('/:id', function (req, res) {
    Decoration.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function (err, decoration) {
        if (err)
            res.status(400).json(err);
        res.json(decoration);
    });
});
module.exports = decorationRouter;
//# sourceMappingURL=decoration.router.js.map
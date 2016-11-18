"use strict";
var express = require("express");
var Collectible = require('../../models/CollectibleMongoose');
var collectibleRouter = express.Router();
collectibleRouter.get('/', function (req, res) {
    Collectible.find().exec()
        .then(function (result) {
        res.json(result);
    });
});
collectibleRouter.get('/:id', function (req, res) {
    Collectible.findById(req.params.id).exec()
        .then(function (result) {
        res.json(result);
    });
});
collectibleRouter.post('/', function (req, res) {
    var collectible = new Collectible(req.body);
    Collectible.createdBy = req.session.user;
    collectible.save()
        .then(function (collectible) {
        res.json(collectible);
    });
});
collectibleRouter.delete('/:id', function (req, res) {
    Collectible.findByIdAndRemove(req.params.id, function (err, collectible) {
        if (err)
            res.status(400).json(err);
        res.json(true);
    });
});
collectibleRouter.put('/:id', function (req, res) {
    Collectible.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function (err, collectible) {
        if (err)
            res.status(400).json(err);
        res.json(collectible);
    });
});
module.exports = collectibleRouter;
//# sourceMappingURL=collectible.router.js.map
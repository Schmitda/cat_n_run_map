"use strict";
var express = require("express");
var Collectible = require('../../models/Collectible');
var multer = require('multer');
var storageCollectible = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './dev_public/assets/uploads/collectible');
    },
    filename: function (req, file, callback) {
        var filename = req.body.name + "." + file.originalname.split('.').pop();
        req.body.source = "assets/uploads/collectible/" + filename;
        callback(null, filename);
    }
});
var upload = multer({ storage: storageCollectible }).single('source');
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
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
            return;
        }
        var collectible = new Collectible(req.body);
        collectible.createdBy = req.session.user;
        collectible.save()
            .then(function (collectible) {
            res.json(collectible);
        }).catch(function (err) {
            console.log(err);
        });
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
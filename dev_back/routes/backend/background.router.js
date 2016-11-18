"use strict";
var express = require("express");
var Background = require('../../models/backgroundMongoose');
var multer = require('multer');
var storageBackground = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './dev_public/assets/uploads/background');
    },
    filename: function (req, file, callback) {
        var filename = req.params.name + "." + file.originalname.split('.').pop();
        req.body.source = "assets/uploads/background/" + filename;
        callback(null, filename);
    }
});
var uploadBackground = multer({ storage: storageBackground }).single('source');
var backgroundRouter = express.Router();
backgroundRouter.get('/', function (req, res) {
    Background.find().exec()
        .then(function (result) {
        res.json(result);
    });
});
backgroundRouter.get('/:id', function (req, res) {
    Background.findById(req.params.id).exec()
        .then(function (result) {
        res.json(result);
    });
});
backgroundRouter.post('/', function (req, res) {
    var background = new Background(req.body);
    background.createdBy = req.session.user;
    background.save()
        .then(function (background) {
        res.json(background);
    });
});
backgroundRouter.delete('/:id', function (req, res) {
    Background.findByIdAndRemove(req.params.id, function (err, background) {
        if (err)
            res.status(400).json(err);
        res.json(true);
    });
});
backgroundRouter.put('/:id', function (req, res) {
    Background.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function (err, background) {
        if (err)
            res.status(400).json(err);
        res.json(background);
    });
});
module.exports = backgroundRouter;
//# sourceMappingURL=background.router.js.map
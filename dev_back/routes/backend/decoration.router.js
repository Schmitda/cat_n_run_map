"use strict";
var express = require("express");
var Decoration = require('../../models/DecorationMongoose');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './dev_public/assets/uploads/decoration');
    },
    filename: function (req, file, callback) {
        var filename = req.body.name + "." + file.originalname.split('.').pop();
        req.body.source = "assets/uploads/decoration/" + filename;
        callback(null, filename);
    }
});
var upload = multer({ storage: storage }).single('source');
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
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
        }
        var decoration = new Decoration(req.body);
        decoration.createdBy = req.session.user;
        decoration.save()
            .then(function (decoration) {
            res.json(decoration);
        })
            .catch(function (err) {
            console.log(err);
        });
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
"use strict";
var express = require("express");
var MapElement = require('../../models/MapElement');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './dev_public/assets/uploads/mapElement');
    },
    filename: function (req, file, callback) {
        var filename = req.body.name + "." + file.originalname.split('.').pop();
        req.body.source = "assets/uploads/mapElement/" + filename;
        callback(null, filename);
    }
});
var upload = multer({ storage: storage }).single('source');
var mapelementRouter = express.Router();
mapelementRouter.get('/', function (req, res) {
    MapElement.find().exec()
        .then(function (result) {
        res.json(result);
    });
});
mapelementRouter.get('/:id', function (req, res) {
    MapElement.findById(req.params.id).exec()
        .then(function (result) {
        res.json(result);
    });
});
mapelementRouter.post('/', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            console.log(err);
        }
        var mapElement = new MapElement(req.body);
        mapElement.createdBy = req.session.user;
        mapElement.save()
            .then(function (mapElement) {
            res.json(mapElement);
        })
            .catch(function (err) {
            console.log(err);
        });
    });
});
mapelementRouter.delete('/:id', function (req, res) {
    MapElement.findByIdAndRemove(req.params.id, function (err, mapelement) {
        if (err)
            res.status(400).json(err);
        res.json(true);
    });
});
mapelementRouter.put('/:id', function (req, res) {
    MapElement.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function (err, mapelement) {
        if (err)
            res.status(400).json(err);
        res.json(mapelement);
    });
});
module.exports = mapelementRouter;
//# sourceMappingURL=map-element.router.js.map
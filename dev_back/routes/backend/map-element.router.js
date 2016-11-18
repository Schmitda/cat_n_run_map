"use strict";
var express = require("express");
var MapElement = require('../../models/MapElementMongoose');
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
    var mapelement = new MapElement(req.body);
    MapElement.createdBy = req.session.user;
    mapelement.save()
        .then(function (mapelement) {
        res.json(mapelement);
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
"use strict";
var express = require("express");
var Map = require('../../models/Map');
var mapRouter = express.Router();
mapRouter.post('/nameTaken', function (req, res) {
    var regEx = new RegExp(req.body.toCheck, 'i');
    Map.findOne({ name: regEx }).exec(function (err, map) {
        if (err)
            res.status(400).json(err);
        if (map === null) {
            res.json({ taken: false });
        }
        else {
            if (map._id == req.body.id) {
                res.json({ taken: false });
            }
            else {
                res.json({ taken: true, error: "nameTaken" });
            }
        }
    }).catch(function (err) {
        res.json(err);
    });
});
mapRouter.get('/', function (req, res) {
    Map.find().populate('createdBy').exec()
        .then(function (result) {
        res.json(result);
    });
});
mapRouter.get('/:id', function (req, res) {
    Map.findById(req.params.id).populate('createdBy').exec()
        .then(function (result) {
        res.json(result);
    });
});
mapRouter.post('/', function (req, res) {
    var map = new Map(req.body);
    map.createdBy = req.session.user;
    map.save()
        .then(function (map) {
        res.json(map);
    });
});
mapRouter.delete('/:id', function (req, res) {
    Map.findByIdAndRemove(req.params.id, function (err, map) {
        if (err)
            res.status(400).json(err);
        res.json(true);
    });
});
mapRouter.put('/:id', function (req, res) {
    Map.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function (err, map) {
        if (err)
            res.status(400).json(err);
        res.json(map);
    });
});
module.exports = mapRouter;
//# sourceMappingURL=map.router.js.map
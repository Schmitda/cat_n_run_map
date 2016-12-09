"use strict";
var express = require("express");
var Device = require('../../models/DeviceMongoose');
var deviceRouter = express.Router();
deviceRouter.get('/', function (request, response) {
    Device.find().exec()
        .then(function (result) {
        response.json(result);
    });
});
deviceRouter.post('/', function (request, response) {
    var device = new Device(request.body);
    device.save();
});
module.exports = deviceRouter;
//# sourceMappingURL=device-router.js.map
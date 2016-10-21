"use strict";
var mongoose = require("mongoose");
var MapElements_1 = require("../../dev_public/app/models/MapElements");
var mapElementsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    width: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    touchable: {
        type: Boolean,
        required: true,
        default: false,
    },
    speed: {
        type: Number,
        required: true,
        default: 1,
    },
    slideable: {
        type: Number,
        required: true,
        default: 0,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});
var MapElements = mongoose.model("MapElements", mapElementsSchema);
module.exports = MapElements_1.MapElements;
//# sourceMappingURL=MapElementsMongoose.js.map
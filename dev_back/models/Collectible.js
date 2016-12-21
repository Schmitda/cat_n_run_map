"use strict";
var mongoose = require("mongoose");
var collectibleSchema = new mongoose.Schema({
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
        default: true,
    },
    zCoord: {
        type: Number,
        required: true,
        default: 1000,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});
var Collectible = mongoose.model("Collectible", collectibleSchema);
module.exports = Collectible;
//# sourceMappingURL=Collectible.js.map
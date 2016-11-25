import mongoose = require("mongoose");

var mapElementSchema = new mongoose.Schema({
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
    sliding: {
        type: Boolean,
        default: false
    },
    speedModifier: {
        type: Number,
    },
    touchable: {
        type: Boolean,
        required:true,
        default: true,
    },
    zcoord: {
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

var MapElement = mongoose.model("MapElement", mapElementSchema);
export = MapElement;
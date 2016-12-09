import mongoose = require("mongoose");

var mapSchema = new mongoose.Schema({
    map: Object,
    width: Number,
    height: Number,
});

var Map = mongoose.model("Map", mapSchema);
export = Map;
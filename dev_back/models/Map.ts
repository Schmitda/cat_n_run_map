import mongoose = require("mongoose");

var mapSchema = new mongoose.Schema({
    map: Object,
});

var Map = mongoose.model("Map", mapSchema);
export = Map;
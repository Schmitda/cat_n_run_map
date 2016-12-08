"use strict";
var mongoose = require("mongoose");
var mapSchema = new mongoose.Schema({
    map: Object,
});
var Map = mongoose.model("Map", mapSchema);
module.exports = Map;
//# sourceMappingURL=Map.js.map
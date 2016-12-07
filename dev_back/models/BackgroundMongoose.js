"use strict";
var mongoose = require("mongoose");
var backgroundSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    source: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});
var Background = mongoose.model("Background", backgroundSchema);
module.exports = Background;
//# sourceMappingURL=BackgroundMongoose.js.map
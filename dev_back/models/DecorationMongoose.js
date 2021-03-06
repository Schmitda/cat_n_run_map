"use strict";
var mongoose = require("mongoose");
var decorationSchema = new mongoose.Schema({
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
    zCoord: {
        type: Number,
        required: true,
        default: 500,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});
var Decoration = mongoose.model("Decoration", decorationSchema);
module.exports = Decoration;
//# sourceMappingURL=DecorationMongoose.js.map
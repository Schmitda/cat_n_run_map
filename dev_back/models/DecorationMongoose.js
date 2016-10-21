"use strict";
var mongoose = require("mongoose");
var Decoration_1 = require("../../dev_public/app/models/Decoration");
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
    zcoord: {
        type: Number,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});
var Decoration = mongoose.model("Decoration", decorationSchema);
module.exports = Decoration_1.Decoration;
//# sourceMappingURL=DecorationMongoose.js.map
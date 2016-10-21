import mongoose = require("mongoose");
import {Decoration} from "../../dev_public/app/models/Decoration";

interface DecorationModel extends Decoration, mongoose.Document { }

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
        required:true,
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

var Decoration = mongoose.model<DecorationModel>("Decoration", decorationSchema);
export = Decoration;
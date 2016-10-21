import mongoose = require("mongoose");
import {MapElements} from "../../dev_public/app/models/MapElements";

interface MapElementsModel extends MapElements, mongoose.Document { }

var mapElementsSchema= new mongoose.Schema({
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

var MapElements = mongoose.model<MapElementsModel>("MapElements", mapElementsSchema);
export = MapElements;
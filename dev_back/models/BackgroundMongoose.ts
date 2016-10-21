import mongoose = require("mongoose");
import {Background} from "../../dev_public/app/models/Background";

interface BackgroundModel extends Background, mongoose.Document { }

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

var Background = mongoose.model<BackgroundModel>("Background", backgroundSchema);
export = Background;
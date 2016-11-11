import mongoose = require("mongoose");
import IBackground = require("./IBackground");

interface IBackgroundModel extends IBackground, mongoose.Document { }

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

var Background = mongoose.model<IBackgroundModel>("Background", backgroundSchema);
export = Background;
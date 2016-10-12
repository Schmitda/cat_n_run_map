import mongoose = require("mongoose");
import IDevice = require("./IDevice");

interface IDeviceModel extends IDevice, mongoose.Document { }

var deviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:String,
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    active_from: {
        type: Date,
        default: Date.now()
    },
    inactive_at: [{
        type: Date,
    }]
});

var Device = mongoose.model<IDeviceModel>("Device", deviceSchema);
export = Device;
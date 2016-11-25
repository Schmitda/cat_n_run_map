"use strict";
var mongoose = require("mongoose");
var characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    width: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true
    },
    walkAnimation: [
        {
            type: String,
        }
    ],
    jumpAnimation: [
        {
            type: String
        }
    ],
    hurtAnimation: [
        {
            type: String
        }
    ],
    dieAnimation: [
        {
            type: String
        }
    ],
    runAnimation: [
        {
            type: String
        }
    ],
    standAnimation: [
        {
            type: String
        }
    ],
    shootAnimation: [
        {
            type: String
        }
    ],
    zcoord: {
        type: Number,
        default: 1000,
        required: true
    },
    canShoot: {
        type: Boolean,
        default: false
    },
    speed: {
        type: Number,
        default: 1
    },
    health: {
        type: Number,
        default: 1
    },
});
var Character = mongoose.model("Character", characterSchema);
module.exports = Character;
//# sourceMappingURL=Character.js.map
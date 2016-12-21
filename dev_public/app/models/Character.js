"use strict";
var Character = (function () {
    function Character() {
    }
    Object.defineProperty(Character.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "walkAnimation", {
        get: function () {
            return this._walkAnimation;
        },
        set: function (value) {
            this._walkAnimation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "jumpAnimation", {
        get: function () {
            return this._jumpAnimation;
        },
        set: function (value) {
            this._jumpAnimation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "hurtAnimation", {
        get: function () {
            return this._hurtAnimation;
        },
        set: function (value) {
            this._hurtAnimation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "dieAnimation", {
        get: function () {
            return this._dieAnimation;
        },
        set: function (value) {
            this._dieAnimation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "runAnimation", {
        get: function () {
            return this._runAnimation;
        },
        set: function (value) {
            this._runAnimation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "standAnimation", {
        get: function () {
            return this._standAnimation;
        },
        set: function (value) {
            this._standAnimation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "shootAnimation", {
        get: function () {
            return this._shootAnimation;
        },
        set: function (value) {
            this._shootAnimation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (value) {
            this._speed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "health", {
        get: function () {
            return this._health;
        },
        set: function (value) {
            this._health = value;
        },
        enumerable: true,
        configurable: true
    });
    return Character;
}());
exports.Character = Character;
//# sourceMappingURL=Character.js.map
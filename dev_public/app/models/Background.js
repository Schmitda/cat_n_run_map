"use strict";
var Background = (function () {
    function Background() {
    }
    Object.defineProperty(Background.prototype, "createdBy", {
        get: function () {
            return this._createdBy;
        },
        set: function (value) {
            this._createdBy = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Background.prototype, "_id", {
        get: function () {
            return this.__id;
        },
        set: function (value) {
            this.__id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Background.prototype, "source", {
        get: function () {
            return this._source;
        },
        set: function (value) {
            this._source = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Background.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return Background;
}());
exports.Background = Background;
//# sourceMappingURL=Background.js.map
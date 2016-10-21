"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MapElements = (function (_super) {
    __extends(MapElements, _super);
    function MapElements() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(MapElements.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (value) {
            this._speed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapElements.prototype, "slideable", {
        get: function () {
            return this._slideable;
        },
        set: function (value) {
            this._slideable = value;
        },
        enumerable: true,
        configurable: true
    });
    return MapElements;
}(Element));
exports.MapElements = MapElements;
//# sourceMappingURL=MapElements.js.map